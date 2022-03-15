import Progress from "../progress/Progress";
import Classes from "../classes/Classes";
import { useState } from "react";

function Dashboard({setCoursesDrop}) {

    const [progressData, setProgress] = useState(undefined)

    return (
        <div id='progress'>
            <div className="progress-content">
                <div className='content'>
                    <Classes setCoursesDrop={setCoursesDrop} progress={setProgress}  />
                </div>
                <div className="cards">
                    <Progress progress={progressData} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;