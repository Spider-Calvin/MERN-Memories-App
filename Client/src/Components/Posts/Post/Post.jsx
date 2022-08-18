import React , {useState}from 'react'
import { motion } from "framer-motion";
import { MdDeleteSweep } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../Actions/Posts";


import './Style.scss'

function Post({post,setCurrentId,loggedin}) {
   const Navigate = useNavigate();
   const dispatch = useDispatch();

   const go_to_form = () => {
    setCurrentId(post._id);
     Navigate("/form");
   };

  return (
    <>
      <div className="app__work-item app__flex">
        <div className="app__work-img app__flex">
          <img src={post.selectedFile} alt="name" />
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="app__work-hover "
          >
            {" "}
            <motion.div
              whileInView={{ scale: [1, 1] }}
              whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.25 }}
              className="creator"
            >
              <h4>{post.creator}</h4>
            </motion.div>
            <a
              onClick={
                loggedin
                  ? go_to_form
                  : () => {
                      alert("Spider : You Should Login to make changes");
                    }
              }
              target="_blank"
              rel="noreferrer"
              className="app__flex app__flex_icon "
            >
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex "
              >
                <FaEdit />
              </motion.div>
            </a>
            <a
              onClick={
                loggedin
                  ? () => {
                      dispatch(deletePost(post._id));
                    }
                  : () => {
                      alert("Spider : You Should Login to make changes");
                    }
              }
              target="_blank"
              rel="noreferrer"
              className="app__flex app__flex_icon "
            >
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex "
              >
                <MdDeleteSweep />
              </motion.div>
            </a>
          </motion.div>
        </div>

        <div className="app__work-content app__flex">
          <h4 className="bold-text">{post.title}</h4>

          <p className="p-text" style={{ marginTop: 10 }}>
            {post.message}
          </p>

          <div className="app__work-tag app__flex">
            <p className="p-text">#{post.tags[0]}</p>
          </div>
        </div>
        <div className="post_Footer">
          <div
            className="like_btn"
            onClick={
              loggedin
                ? () => dispatch(likePost(post._id))
                : () => {
                    alert("Spider : You Should Login to make changes");
                  }
            }
          >
            like <BsHeartFill /> &nbsp; {post.likeCount}
          </div>
          <div>
            <h6>Created {moment(post.createdAt).fromNow()}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post
