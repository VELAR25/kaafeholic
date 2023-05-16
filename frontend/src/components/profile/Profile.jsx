import React from "react";
import { motion } from "framer-motion";
import "../../styles/Profile.scss";
import me from "../../assets/gaurav.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";

const Profile = () => {
  const options = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 transition={{ delay: 0.3 }} {...options}>
          Gaurav Khinchi
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            style={{
              backgroundColor: "blue",
            }}
            to="/admin/dashboard"
          >
            <MdDashboard />
            Dashboard
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/myorders">
            <MdShoppingCartCheckout />
            Orders
          </Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.5 }}
        >
          <MdLogout /> Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
