import classes from "./App.module.css";
import { images_Routes } from "./constant";

function App() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}></div>
      <div className={classes.imgContainer}>
        {images_Routes.map((vid_src, i) => {
          return (
            <div className={classes.videoContainer}>
              <video src={vid_src} key={i} autoPlay muted loop></video>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
