export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "El desarrollo web es una extensión de mi pasión por las artes visuales",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1-opt4.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Traducciones para el sector IT precisas, respaldadas por mi experiencia.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi tech stack",
    description: "Apuesto a mejorar constantemente",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "El trabajo en equipo y la comunicación abierta son mi prioridad",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "En este momento estoy desarrollando con React, Next.js, Aceternity UI, Tailwind, Appwrite.",
    description: "Lo último",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Te gustaría que trabajemos juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  /* {
   id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  }, */
  {
    id: 1,
    title: "Pulso - Turnero Médico",
    des: "Los pacientes y administradores pueden agendar, modificar y cancelar turnos | React, Next.js, Typescript, Tailwind, Appwrite, Sentry, Twilio",
    img: "/pulso2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/appwrite.svg",
    ],
    link: "https://pulso-turnero.vercel.app/",
  },
  {
    id: 2,
    title: "Web 3D Animada para Apple iPhone",
    des: "Recreación del sitio web del Apple iPhone 15 Pro con animaciones GSAP y efectos 3D con Three.js | React, Next.js, Typescript, Tailwind",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-website-gnaedinger.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium libero quis enim suscipit, id laoreet ex mattis. Duis vel leo condimentum, tempus nisi eget, dignissim lorem. Ut vitae sapien vel ipsum consectetur dapibus. Quisque non metus vitae odio fermentum consequat. Integer scelerisque lacus eget ligula volutpat, sit amet vestibulum urna fermentum. Sed ut sapien at eros tristique lobortis sit amet et elit. ",
    name: "Lorem Ipsum",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium libero quis enim suscipit, id laoreet ex mattis. Duis vel leo condimentum, tempus nisi eget, dignissim lorem. Ut vitae sapien vel ipsum consectetur dapibus. Quisque non metus vitae odio fermentum consequat. Integer scelerisque lacus eget ligula volutpat, sit amet vestibulum urna fermentum. Sed ut sapien at eros tristique lobortis sit amet et elit. ",
    name: "Lorem Ipsum",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium libero quis enim suscipit, id laoreet ex mattis. Duis vel leo condimentum, tempus nisi eget, dignissim lorem. Ut vitae sapien vel ipsum consectetur dapibus. Quisque non metus vitae odio fermentum consequat. Integer scelerisque lacus eget ligula volutpat, sit amet vestibulum urna fermentum. Sed ut sapien at eros tristique lobortis sit amet et elit. ",
    name: "Lorem Ipsum",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium libero quis enim suscipit, id laoreet ex mattis. Duis vel leo condimentum, tempus nisi eget, dignissim lorem. Ut vitae sapien vel ipsum consectetur dapibus. Quisque non metus vitae odio fermentum consequat. Integer scelerisque lacus eget ligula volutpat, sit amet vestibulum urna fermentum. Sed ut sapien at eros tristique lobortis sit amet et elit. ",
    name: "Lorem Ipsum",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrolladora Full Stack Trainee",
    desc: "Contribuí al desarrollo y mejora de una plataforma contable empleando VB, C#, JavaScript, JQuery, HTML, CSS y SQL Server",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Proyectos Dev Freelance",
    desc: "Participo en diversos proyectos, tanto independientes como en equipo, en los cuales utilicé JavaScript, HTML, CSS, React, Next.js, Node.js, MongoDB",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Artes Visuales",
    desc: "En mi tiempo libre, trabajo en proyectos de arte personales/grupales. Estudio la Licencitura en Artes Visuales en la UNC.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Traductora de inglés al español",
    desc: "Me encargo de la traducción/edición de textos especializados en TI, asegurando que fueran precisos y naturales. Generé contenido para entrenar IA.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/cindygnaedinger",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://api.whatsapp.com/send?phone=543516544771&text=Hola,%20Cindy:",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/cindygnaedinger/",
    tooltip: "LinkedIn",
  },
];
