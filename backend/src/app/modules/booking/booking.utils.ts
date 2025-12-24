
export const isDateInbetween = (date:string, from:string, to:string) => {
    return (new Date(date).getTime() >= 
    new Date(from).getTime() && new Date(date).getTime() <= 
    new Date(to).getTime());
  }