export const slideUp = {
    initial: {
      y: 100,  // Ajusta la posición inicial para que esté cerca de la vista
      opacity: 0,  // Inicia invisible
    },
    enter: {
      y: 0,  // Se desplaza a la posición final
      opacity: 1,  // Se vuelve visible
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };


export const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
      opacity:1,
        transition: {duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.5}
    }
}

export const slideUp2 = {
    initial: {
        y: "20%",
        // x:"-10%"
    },
    open: (i) => ({
        y: "0%",
        // x:"0%",
        transition: {duration: 0.5,ease: [0.33, 1, 0.68, 1], delay: 0.05 * i}
    }),
    closed: {
        y: "20%",
        // x:"-10%",
        transition: {duration: 0.1}
    }
}