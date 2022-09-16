

export const skinReducer = (state = {
  left: "",
  right: ""
}, action: string) => {
  switch(action){
    case "normal":
      return state = {
        left: "",
        right: ""
      }
    case "mario":
      return state = {
        left: "https://static-cdn.jtvnw.net/ttv-boxart/2692_IGDB-272x380.jpg",
        right: "https://www.apkmirror.com/wp-content/uploads/2021/09/34/6142a8315610f.png"
      }
    case "marvel":
      return state = {
        left: "https://i.pinimg.com/originals/00/4e/13/004e13c624aa3a33b9c6bfb3dd70cfd3.jpg",
        right: "https://www.idlewp.com/wp-content/uploads/2021/09/iron-man-wallpaper-idlewp-1.jpg"
      }
    case "dc":
      return state = {
        left: "https://jpimg.com.br/uploads/2017/04/2687753096-henry-cavill-como-super-homem-684x1024.jpg",
        right: "https://i.pinimg.com/564x/be/04/14/be0414b35750e2f467ad19cb5c0d2823.jpg"
      }
    default:
      return state
  }
}