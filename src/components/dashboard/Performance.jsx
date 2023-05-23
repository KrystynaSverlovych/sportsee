import React from "react";
import PropTypes from "prop-types";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from "recharts";
import UserPerformance from "../../models/UserPerformance";
import "../../styles/performance.scss"

/**
 * @description A component that provides a RadarChart of the User's Performance.
 * @property {Function} Performance print out all the data visualization
 * @param { Object } performanceData
 * @param { Number } performanceData.userId - the id of the user
 * @param { Object } performanceData.kind - the types of performance
 * @param { Array.<Object> } performanceData.data - the performance data of the user
 * @returns { HTMLElement}
 */
const Performance = ({ performanceData }) => {

    const PERFORMANCE_CLASS = new UserPerformance(performanceData);

    return (
        <section className="performance">
            <RadarChart
                outerRadius={65}
                width={230}
                height={230}
                data={PERFORMANCE_CLASS.performance}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tick={{ fill: "#ffffff", fontSize: 10 }}
                    axisLine={true}
                    tickLine={true}
                />

                <PolarRadiusAxis
                    tickCount={6}
                    domain={[0, 150]}
                    axisLine={false}
                    tick={false}
                />

                <Radar
                    dataKey="value"
                    stroke="rgba(230, 0, 0, .7)"
                    fill="#E60000"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </section>
    );
};

Performance.propTypes = {
    performanceData: PropTypes.object,
};

export default Performance;
