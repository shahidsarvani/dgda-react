import '../bootstrap.min.css';
import '../mystyle.css';
import video from '../videos/dgdA_UI_Intro-10secs.mp4';
import splash_video_fade from '../splash-video-fade';



function Welcomesection() {
  return (
    <div className="welcome_video_screen">

        <section className="dg_vw_screen">
            <div className="container-fluid dg_vw_cont">
                <div className="row dg_vw_row">
                    <div className="col-12 dg_vw_col">
                        <video id="main_video" width="100%" height="100%" loop={true} controls={false} autoPlay="autoplay" muted>
                                <source src={video} type="video/mp4"/>
                                <source src="movie.ogg" type="video/ogg"/>
                                Your browser does not support the video tag.
                        </video>
                        <div id="main_video_btn" className="main_video_btn" onClick={splash_video_fade}>
                            <a id="video_start_btn" href="#"><span> أنقر لبدء العرض</span><br/>TAP TO START THE SHOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Welcomesection;


























