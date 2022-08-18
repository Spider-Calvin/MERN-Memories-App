import React , {useState} from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./style.scss"
import { GiSpiderWeb } from "react-icons/gi";
import { BiLogIn} from "react-icons/bi";
import { DiGhostSmall } from "react-icons/di";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";


function Posts({setCurrentId, loggedin}) {

  const posts = useSelector((state) => state.posts);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  console.log(posts);
  const Navigate = useNavigate();


  const go_to_form = ()=>{
    Navigate('/form');
    setCurrentId(null)
  }

  const go_to_login = () => {
    Navigate("/login");
  };



return (
  <>
    <h1 className="app__tittle">
      <GiSpiderWeb />
      &nbsp; Spider Memories
    </h1>

    <div className="form_navigator">
      <div className="form_navigator_icon">
        <DiGhostSmall
          className={loggedin ? "fni_form" : false}
          onClick={
            loggedin
              ? go_to_form
              : () => {
                  alert("Spider : You Should Login to make changes");
                }
          }
        />
        <BiLogIn
          className={loggedin ? "fni_form" : false}
          onClick={go_to_login}
        />
      </div>
    </div>

    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfoli"
    >
      {posts.length ? (
        <>
          {posts.map((post) => (
            <Post
              post={post}
              key={post._id}
              setCurrentId={setCurrentId}
              loggedin={loggedin}
            />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </motion.div>
  </>
);
}

export default Posts;
