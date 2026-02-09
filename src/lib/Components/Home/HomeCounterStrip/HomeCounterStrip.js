"use client"
import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './HomeCounterStrip.module.css';
import SectionTitle from '@/lib/UI/SectionTitle/SectionTitle';

const HomeCounterStrip = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const [animatedValues, setAnimatedValues] = useState({
    degreeVerified: 0,
    instituteVerified: 0,
    instantVerification: 0,
    happyClients: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimatedValues({
        yearsExperience: 17,
        dedicatedManagers: 650,
        completedProjects: 8745,
      });
    }
  }, [inView]);

  const springProps = useSpring({
    yearsExperience: inView ? 17 : 0,
    dedicatedManagers: inView ? 650 : 0,
    completedProjects: inView ? 45 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className={styles.counterStrip}>
      <div className="container text-center">
        <div className="row m-0" ref={ref}>
        <div className="col-sm-4 col-12">
            <div className="row">
              <div className="col-6 text-end">
                <animated.div className={styles.counter}>
                  {springProps.yearsExperience.to((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
              </div>
              <div className="col-6 text-start w-25">
                <SectionTitle
                  line="23px"
                  weight="700"
                  title="Years Experience"
                  color="rgb(215 215 215)"
                ></SectionTitle>
              </div>
            </div>
          </div>
        <div className="col-sm-4 col-12">
            <div className="row">
              <div className="col-6 text-end">
                <animated.div className={styles.counter}>
                  {springProps.dedicatedManagers.to((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
              </div>
              <div className="col-6 text-start w-25">
                <SectionTitle
                  line="23px"
                  weight="700"
                  title="Total Designs"
                  color="rgb(215 215 215)"
                ></SectionTitle>
              </div>
            </div>
          </div>
     
          <div className="col-sm-4 col-12">
            <div className="row">
              <div className="col-6 text-end">
                <animated.div className={styles.counter}>
                  {springProps.completedProjects.to((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
              </div>
              <div className="col-5 text-start">
                <SectionTitle
                  line="23px"
                  weight="700"
                  title="Skilled architects"
                  color="rgb(215 215 215)"
                ></SectionTitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCounterStrip;
