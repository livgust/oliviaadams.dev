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
                date="Feb 2021 - present"
                {...workIconProps}
            >
                <h3>Owner</h3>
                <h4>Ora Innovations, LLC</h4>
                <h5>
                    <a
                        href="https://macovidvaccines.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        macovidvaccines.com
                    </a>
                </h5>
                <p>
                    Created{" "}
                    <a
                        href="https://macovidvaccines.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        macovidvaccines.com
                    </a>
                    , aggregating COVID vaccine availability across
                    Massachusetts in real time.
                    <br />
                    Gained{" "}
                    <a
                        href="https://www.bostonglobe.com/2021/02/05/business/this-software-developer-is-building-better-website-find-vaccination-slots-than-state/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        local
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.cnn.com/2021/02/08/us/olivia-adams-ma-covid-vaccine-website-trnd/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        national
                    </a>{" "}
                    media attention.
                    <br />
                    Implemented text message alert subscriptions using Fauna DB
                    and AWS Pinpoint.
                    <br />
                    Crowdsourced funding to ensure coverage of operational
                    expenses and hired help
                    <br />
                    Organized volunteer group of over 20 developers and
                    designers
                    <br />
                    Technologies used:
                    <ul>
                        <li>node.js</li>
                        <li>React</li>
                        <li>Fauna DB</li>
                        <li>AWS SAM/Amplify/Lambda/S3/Pinpoint</li>
                        <li>Git</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Aug 2021 - present"
                {...workIconProps}
            >
                <h3>Principal Developer</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Creating architectures, soliciting feedback from Architect,
                    and gathering feedback from team members
                    <br />
                    Championing Gender-Affirming Care Codefest to close known
                    gaps in the care of transgender and non-binary patients
                    <br />
                    Acting as "security champion" for the division
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Feb 2021 - present"
                {...workIconProps}
            >
                <h3>Volunteer Technical Lead</h3>
                <h4>MA Covid Vaccination Help</h4>
                <p>
                    <a
                        href="https://macovidvaxhelp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MA Covid Vaccination Help
                    </a>{" "}
                    has organized volunteers to book COVID-19 vaccine
                    appointments for thousands of underprivileged and
                    under-resourced residents accross Massachusetts. As
                    technical lead, I organized approximately a dozen developers
                    to build and maintain our home-grown booking system to keep
                    track of thousands of residents requesting help assigned to
                    hundreds of volunteers.
                    <br />
                    <br />
                    Technologies used: React, Python, MySQL, AWS SAM/Amplify,
                    Squarespace, Twilio Sendgrid, Git
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="Feb 2018 - Aug 2021"
                {...workIconProps}
            >
                <h3>Lead Developer</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Scrum master of one full-stack team
                    <br />
                    Developer of a new full-stack project built with new
                    technologies but still integrated in the existing legacy
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
                date="Jun 2015 - Jan 2018"
                {...workIconProps}
            >
                <h3>Senior Developer (2017-2018)</h3>
                <h4>athenahealth, Inc.</h4>
                <p>
                    Scrum master of one full-stack team
                    <br />
                    Empowered the team to finish a long-standing project before
                    a tight deadline
                </p>
                <h3>Software Developer (2015-2017)</h3>
                <h4>athenahealth, Inc.</h4>
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
