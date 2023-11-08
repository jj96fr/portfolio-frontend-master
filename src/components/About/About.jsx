import "./about.css";
import {  FaJava, FaReact, FaBootstrap,FaHtml5, FaCss3, FaJs  } from "react-icons/fa";
import {   SiPostgresql, SiSpring } from "react-icons/si";
import Button from "../Button/Button";
import { SiMinutemailer, SiDocusign } from "react-icons/si";
import { motion } from "framer-motion";

// animation for framer motion
const about = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: .5,
            ease: "easeOut"
        }
    }
}

const icon = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .2,
            duration: .5,
            ease: "easeOut"
        }
    }
}

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">

                <motion.div
                    variants={about}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    className="text"
                >
                    <h2>Su di me</h2>
                    <p>
                    Federico Reiff, nato il 13 maggio del 1996 ad Ascoli Piceno, 
                       dopo una serie di studi e percorsi lavorativi nel capo della comunicazione e 
                       del marketing decido che devo dare una svolta alla mia vita lavorativa
                       mi affido ad EPICODE per un bootcamp intensivo come full stack developer 
                       per raggiiungere le competenze necessarie con le tecnologie sotto elencate 
                       per poi continuare a specializzarmi privatamente. Il mio obbiettivo e' continuare a 
coltivare questa passione nel ambito IT.Potete contattarmi per lavori azendali o privati come e-commerce, 
stiti web professionali o privati e gestione database.

                       
                    </p>

                    <Button
                        text="Contattami"
                        icon={<SiMinutemailer />}
                        type="btn"
                        link="mailto:freiff88@gmail.com"
                    />
                     <Button
                            text="Scarica il mio CV"
                            icon={<SiDocusign />} // Assumi che esista un'icona di download che vuoi usare
                            type="btn"
                            link="/FedericoReiffCV.pdf" // Aggiorna con il percorso corretto del CV
                            download
                        />
                </motion.div>

                <div className="technologies">
                    <div className="icons">
                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaHtml5 />
                            <p>HTML</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaJava />
                            <p>Java</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaCss3 />
                            <p>Css</p>
                        </motion.div>

                      

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiPostgresql />
                            <p>PostgreSQL</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaReact />
                            <p>React</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaJs />
                            <p>Java Script</p>
                        </motion.div>
                        

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiSpring />
                            <p>Spring Boot</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaBootstrap />
                            <p>Bootstrap</p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}