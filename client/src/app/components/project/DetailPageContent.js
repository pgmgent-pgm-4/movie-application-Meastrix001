import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { useFetch } from "../../hooks";
import { useState, useEffect } from 'react';
import styles from './Details.module.scss';

const DetailPageContent = ({ item, type }) => {
  const CREDITS = `https://api.themoviedb.org/3/${type}/${item.id}/credits?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US`
  const { data, isLoading, error } = useFetch(CREDITS);
  const [showAllCast, setShowAllCast] = useState(false)
  const [showAllCrew, setShowAllCrew] = useState(false)
  const creditsData = data
  const toggleViewCast = () => {
    {
      showAllCast === true ? setShowAllCast(false) : setShowAllCast(true)
    }
  };
  const toggleViewCrew = () => {
    {
      showAllCrew === true ? setShowAllCrew(false) : setShowAllCrew(true)
    }
  };
  return (
    <article className={`${styles.wrapper} ${styles.article}`}>   

      <div className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path !== null ? item.backdrop_path :  item.poster_path }`} alt={item.name} />
        <p className={styles.rating}>
          <span className={styles.orange}>{item.vote_average}/10 rating out of {item.vote_count} votes</span>
          </p>
        <section>
          <h1 className={styles.title}>{ item.name !== undefined ? item.name : item.title } - {type}</h1>
          <small>{item.episode_run_time !== undefined ? `${item.episode_run_time} min` : item.runtime + " min"} | {item.genres.lenght !== 0 ? 
          item.genres.map(genre => { return( genre.name + " - " ) } ) : "ITEM_LENGHT"} | {type === "tv" ? "TV Serie " + item.episode_run_time : "Movie " + item.release_date}</small>
          <p>{item.overview}</p>
        </section>
      </div>

      { item.number_of_seasons !== undefined ?
      <div className={`${styles.flex} ${styles.seasons}`}>
        
        <div className={styles.padding}>
          <h2>Show lenght:</h2>
          <p>{item.number_of_seasons} Seasons</p>
          <p>{item.number_of_episodes} Episodes</p>
        </div>

        <div className={styles.padding}>
          <h2>First And last air date</h2>
          <p>Aired first in: {item.first_air_date} </p>
          <p>Aired last on{item.last_air_date}</p>
          <p>avg episode lenght: {item.episode_run_time} minutes </p>
        </div>

        <div className={styles.padding}>
            { item.next_episode_to_air !== null && item.next_episode_to_air !== undefined?
                  <div>
                    <h2>Next episode  <span className={styles.orange}>"Season{item.next_episode_to_air.season_number} episode {item.next_episode_to_air.episode_number}"</span> airs on</h2>
                    <p>{item.next_episode_to_air.air_date}, Titled: {item.next_episode_to_air.name}</p>
                  </div> 
          : <h2>Next episode air date not yet know.</h2>
          }
          </div> 

      </div> 
      
      : ""
      
      }

      { item.production_companies !== undefined ?
        <div>
          <h2>Production Companies</h2>
          <ul className={styles.comp}>
            { item.production_companies.map(company => {
              return(
                <li key={company.id}>
                { company.logo_path !== null ?
                  <img className={styles.compLogo} src={`https://image.tmdb.org/t/p/original${company.logo_path}`}></img> :
                  <img className={styles.compLogo} src={"https://www.scanningpens.com/c.4437431/site/images/noimage.png"}></img> 
                }
                <p>{company.name}</p>
                </li>
              )
            })}

          </ul>
        </div> 
      : ""
      }

{ creditsData ?

        <div>

            <h2>cast and crew involved</h2>
          <div>
              <h2>Cast</h2>
            <ul className={`${showAllCast ? styles.usersOpen : styles.usersClosed} ${styles.ul}`}>
              { creditsData.cast.length !== 0 ? creditsData.cast.map(member => {
                return(
                  <li key={member.cast_id}>
                     {member.profile_path !== null ? <img className={styles.userImg} src={`https://image.tmdb.org/t/p/original${member.profile_path}`}></img> : <div className={styles.userImg}></div>}

                    <p>{member.name} <span className={styles.orange}>As</span> {member.character}</p>
                    </li>
                )
              }) : <p>No cast members found</p>}
            </ul>
            <p onClick={toggleViewCast} className={styles.hover}>{showAllCast ? "hide cast members" : "See more cast members"}</p>
          </div>

            <div>
              <h2>Crew</h2>
              <ul className={`${showAllCrew ? styles.usersOpen : styles.usersClosed} ${styles.ul}`}>
              { creditsData.crew.length !== 0 ? creditsData.crew.map(member => {
                return(
                  <li key={member.id}>
                     {member.profile_path !== null ? <img className={styles.userImg} src={`https://image.tmdb.org/t/p/original${member.profile_path}`}></img> : <div className={styles.userImg}></div>}
                    <p>{member.name} <span className={styles.orange}>Job: </span>{member.department}</p>
                    </li>
                )
                
              }) : <p>No crew members found</p>}
            </ul>
            <p onClick={toggleViewCrew} className={styles.hover}>{showAllCrew ? "hide crew members" : "See more crew members"}</p>
            </div>

        </div> 
      : ""
      }

    </article>
  )
};

export default DetailPageContent;