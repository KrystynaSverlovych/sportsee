import React from "react";
import PropTypes from "prop-types";
import {AreaChart, Area, XAxis, YAxis, Tooltip} from "recharts";
import UserAverageSession from "../../models/UserAverageSession";
import "../../styles/averageSession.scss";

/**
 * @function AverageSession
 * @description Recharts line graph that show average duration in minutes of user's sport sessions
 * @param { Object } averageSessionsData All the data needed for the Line chart
 * @param { Array.<Objects> } averageSessionsData.sessions - the sessions of the user
 * @param { Number } averageSessionsData.userId - the Id of the user
 * @returns { HTMLElement }
 */
const AverageSession = ({averageSessionsData}) => {

    const AVERAGE_SESSIONS_CLASS = new UserAverageSession(averageSessionsData);

    return (
        <section className="average-session">
            <h6 className="average-session--label">Durée moyenne des sessions</h6>
            <AreaChart
                width={233}
                height={233}
                data={AVERAGE_SESSIONS_CLASS._averageSessions}
                margin={{
                    top: 1,
                    right: 7,
                    bottom: 9,
                    left: 7,
                }}>
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    tickSize={20}
                    axisLine={false}
                    tick={{fill: "rgba(255, 255, 255, .5)"}}
                />
                <YAxis hide={true} domain={[0, "dataMax + 51"]}/>

                <Tooltip
                    filterNull={false}
                    separator=""
                    itemStyle={{
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontSize: "10px",
                        padding: "rem",
                        margin: 3,
                        border: 0,
                    }}
                    formatter={(name, value) => [name, ""]}
                    contentStyle={{
                        padding: ".4rem",
                        backgroundColor: "#ffffff",
                        border: 0,
                    }}
                    labelStyle={{
                        display: "none",
                    }}
                />

                <Area
                    type="natural"
                    dataKey="sessionLength"
                    stroke="#ffffff"
                    activeDot={{
                        stroke: "rgba(255, 255, 255, .5)",
                        strokeWidth: 10,
                        r: 2.5,
                    }}
                    dot={false}
                    unit="min"
                    strokeWidth={2}
                    connectNulls={true}
                    fillOpacity={1}
                    fill="rgba(255, 255, 255, .1)"
                />
            </AreaChart>
        </section>
    );
};

AverageSession.propTypes = {
    averageSessionsData: PropTypes.object.isRequired,
};

export default AverageSession;
