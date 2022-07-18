import '../bootstrap.min.css';
import '../mystyle.css';
import move_backto_startshow from '../move-backto-startshow';
import '../customjqjs';

function Showcontrols() {
  return (
    <div className="show_controls_screen_ar">

        <section id="dg_sc_screen" className="dg_sc_screen english">
            <div className="container dg_sc_container">
                <div className="row dg_sc_row">
                    <div className="col-2"></div>
                    <div className="col-4 dg_sc_col">
                        <div className="optn_language">
                            <a onClick={move_backto_startshow} href="#"><h3>عربي</h3></a>
                        </div>
                    </div>
                    <div className="col-4 dg_sc_col">
                        <div className="optn_language">
                            <a onClick={move_backto_startshow} href="#"><h3>إنجليزي</h3></a>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Showcontrols;
