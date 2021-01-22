import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// add animations and labels to the timeline
tl.addLabel("start")
    
gsap.from(".section-title", { 
        scrollTrigger: ".section-title",
        y: 50, 
        opacity: 0,
        duration: 1,
    })

const projects = gsap.utils.toArray('.project-container');
projects.forEach(project => {
  gsap.from(project, { 
    y: 200, 
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: project,
      scrub: true,
      once: true,
      end: "bottom 1050px"
    }
  })
});

