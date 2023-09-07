import classes from './AsteroidList.module.scss';
import { AsteroidCard } from '../../UI/AsteroidCard';
import { getAsteroidList, getNextAsteroid } from '../model/AsteroidListModel';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { currentDate, apiKey } from '../../../common/constants';
import { IAsteroidList } from '../type/AsteroidListType';
import { FC, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


const AsteroidList:FC = () => {

  const dispatch = useAppDispatch();

  const [ distanceType, setDistanceType ] = useState('meter');
  const [ scrollableDataList, setScrollableList ] = useState<any[]>([]);

  const { asteroidList } = useAppSelector(state => state.asteroidList);
  const { asteroidListStatus } = useAppSelector(state => state.asteroidList);

  useEffect(() => {
    dispatch(getAsteroidList({ end_date: currentDate, api_key: apiKey }));
  }, []);

  const asteroidListData = asteroidList.near_earth_objects && Object.values(asteroidList.near_earth_objects)[ 0 ];

  const handleUpdateList = () => {
    if (asteroidListData !== undefined && asteroidListStatus === 'succeeded') {
      setScrollableList(
        (prev) => ([ ...prev, ...asteroidListData ]),
      );
    }
  };

  useEffect(() => {
    handleUpdateList();
  }, [ asteroidListStatus ]);


  const handleLoadNextData = () => {
    dispatch(getNextAsteroid(asteroidList.links!.next));
  };

  return (
    <>

      <InfiniteScroll
        className={classes.scroll}
        dataLength={scrollableDataList.length}
        next={handleLoadNextData}
        hasMore={!!asteroidList.links?.next}
        height={700}
        loader={<p>loader</p>}
      >
        <div className={classes.sortBlock}>
          <p className={classes.title}>Ближайшие подлеты астероидов</p>
          <div className={classes.typeBlock}>
            <div
              className={distanceType === 'meter' ? classes.activeType : classes.notActiveType}
              onClick={() => setDistanceType('meter')}>
              <p>в километрах </p>
            </div>
            <p className={classes.text}>|</p>
            <div
              className={distanceType === 'lunar' ? classes.activeType : classes.notActiveType}
              onClick={() => setDistanceType('lunar')}>
              <p>в лунных арбитах</p>
            </div>
          </div>
        </div>
        {scrollableDataList.map((item: IAsteroidList, i: number) => (
          <AsteroidCard
            date={item.close_approach_data[ 0 ]?.close_approach_date}
            name={item.name}
            diameter={item.estimated_diameter.meters.estimated_diameter_max}
            distanceLunar={item.close_approach_data[ 0 ]?.miss_distance.lunar}
            distanceMeter={item.close_approach_data[ 0 ]?.miss_distance.kilometers}
            dangerous={item.is_potentially_hazardous_asteroid}
            type={distanceType}
            key={i}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};


export default AsteroidList;
