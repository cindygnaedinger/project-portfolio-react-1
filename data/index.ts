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
      "Transformo mi pasión por las artes visuales en experiencias digitales atractivas y funcionales.",
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
      "Traducciones TI precisas respaldadas por mi experiencia.",
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
    description: "Compromiso con la mejora constante",
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
      "React, Next.js, Tailwind y más en mis proyectos actuales",
    description: "Nuevas herramientas",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Colaboramos en tu próximo proyecto?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sala 8 ½: catálogo de películas | Feb 2025",
    des: "Una aplicación web minimalista para gestionar y explorar películas | React 19, Vite, Tailwind CSS 4.0, Aceternity UI, The Movie Database (TMDb) API, Appwrite",
    img: "/sala.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/appwrite.svg",
    ],
    link: "https://movie-react-vite.vercel.app/",
  },
  {
    id: 2,
    title: "Pulso: turnero médico | Jul 2024",
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
    id: 3,
    title: "Apple iPhone: web 3D animada | Jul 2024",
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
    desc: "Mejoré una plataforma contable con VB, C#, JavaScript, JQuery, HTML, CSS y SQL Server",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Proyectos Dev Freelance",
    desc: "Colaboré en proyectos con JavaScript, HTML, CSS, React, Next.js, Node.js, MongoDB",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Artes Visuales",
    desc: "Exploro proyectos artísticos mientras estudio la carrera",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Traductora de inglés al español",
    desc: "Traduje textos de TI y creé contenido para entrenar IA",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/cindygnaedinger",
    title: "github",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://api.whatsapp.com/send?phone=543516544771&text=Hola,%20Cindy:",
    title: "whatsapp",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/cindygnaedinger/",
    title: "LinkedIn",
  },
];
