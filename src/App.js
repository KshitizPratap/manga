import classes from "./App.module.css";
import { images_Routes } from "./constant";

function App() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}></div>
      <div className={classes.imgContainer}>
        {images_Routes.map((src, i) => {
          return (
            <div className={classes.videoContainer} style={{
              backgroundColor: src.bg,
              padding: src.type == 0 ? "2rem 0" : "0"
            }}>
              {src.type == 0 ? (
                <video src={src.route} key={i} autoPlay muted loop></video>
              ) : (
                <img src={src.route} alt="" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
