/* eslint-disable @typescript-eslint/no-explicit-any */


export const replaceMongoIdInArray = (array:any) => {
    const mappedArray = array.map((item:any) => {
      return {
        id: item._id.toString(),
        ...item
      }
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    }).map(({ _id, ...rest }: any) => rest);

    return mappedArray;
  }

export const replaceMongoIdInObject = (obj:any) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const {_id, ...updatedObj}:any = {...obj, id: obj._id.toString()};
   return updatedObj;
  }
