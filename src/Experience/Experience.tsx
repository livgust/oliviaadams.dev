import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SchoolIcon from "@material-ui/icons/School";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default function Experience() {
    const classes = makeStyles((theme: Theme) => {
        const white = "#fff";
        return createStyles({
            work: {
                backgroundColor: theme.palette.secondary.main,
            },
            icon: {
                color: white,
            },
            school: {
                backgroundColor: theme.palette.primary.main,
            },
        });
    })();
    const workIconProps = {
        icon: <WorkOutlineIcon className={classes.icon} />,
        iconClassName: classes.work,
    };
    const schoolIconProps = {
        icon: <SchoolIcon className={classes.icon} />,
        iconClassName: classes.school,
    };
    return (
        <VerticalTimeline layout="1-column">
            <VerticalTimelineElement
                date="Feb 2018 - present"
                {...workIconProps}
            >
                <h3>Lead Member of Technical Staff</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Scrum master of one full-stack team
                    <br />
                    Developer of a new full-stack project built with new
                    technologies but still integrated in the existing monolithic
                    architecture
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="May 2019 - Dec 2019"
                {...workIconProps}
            >
                <h3>Engineering Manager</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Manager of seven direct reports ranging from Associate to
                    Principal Developer
                    <br />
                    Scrum master of one full-stack team
                    <br />
                    Active participant in project planning and goal-setting at
                    the zone and product level
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Feb 2017 - Jan 2018"
                {...workIconProps}
            >
                <h3>Senior Software Developer</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Scrum master of one full-stack team
                    <br />
                    Empowered the team to finish a long-standing project before
                    a tight deadline
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Jun 2015 - Jan 2017"
                {...workIconProps}
            >
                <h3>Software Developer</h3>
                <h4>athenahealth, Inc.</h4>
                <p>Quick learner of existing technical stack</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="Jun 2015" {...schoolIconProps}>
                <h3>Master of Engineering</h3>
                <h4>Electrical and Computer Engineering</h4>
                <p>Cornell University</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Jan 2015 - Jun 2015"
                {...workIconProps}
            >
                <h3>Graduate Teaching Research Specialist</h3>
                <h4>Cornell University</h4>
                <p>
                    Head TA of the ECE 3400 class, which doubles as an M.Eng.
                    project.
                    <br />
                    Creating lab handouts and assignments
                    <br />
                    Structuring the lab section of the course (robotic
                    maze-mapping)
                    <br />
                    Grading assignments and overseeing lab sessions
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="Jan 2015" {...schoolIconProps}>
                <h3>Bachelor of Science</h3>
                <h4>Electrical and Computer Engineering</h4>
                <p>Cornell University</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Jun 2013 - Aug 2013"
                {...workIconProps}
            >
                <h3>Intern</h3>
                <h4>Naval Surface Warfare Center, Panama City, FL</h4>
                <p>
                    Created a control and visualization system for a robot
                    manipulator
                    <br />
                    Used the Robot Operating System, Rviz, and C++ to integrate
                    a 3D mouse as the control device for the system
                    <br />
                    Utilized Linux environment for software development and
                    debugging
                    <br />
                    Created a path-planning algorithm based on Rapidly-Exploring
                    Random Trees
                    <br />
                    Worked with three other teammates to delegate tasks to
                    create a fully functional and distributable product
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
