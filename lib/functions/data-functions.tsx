import { education, experince, project } from '../constants/data-types';

const filterByTech = (data: Array<education | experince | project >, tech: string) => {
  return data.filter(item => {
    for(const value of item.tech) {
      if(value.toLowerCase() === tech.toLowerCase()) {
        return true;
      }
    }
  
  });
}

const paginate  = (data: Array<education | experince | project >, perPage: number = 10) => {
 if(data.length < perPage) return [data];
 ;
  
 const pages: Array<Array<education | experince | project >> = [];
  
   data.reduce((acc: Array<education | experince | project >, val: education | experince | project, index: number) => {
    
    if(acc.length <= perPage -1){ //keep adding items to acc till qouta reached
      acc.push(val);

      if(index === data.length -1){ // catch last page with less items
        pages.push(acc);
        return acc;
      }
    }
    else{
      pages.push(acc); //push paged items to pages
      acc = [val];
    }
    return acc;
   },[])

 return pages;
}

const filters = (data: Array<education | experince | project > ) =>{

  const tech: Array<string> = [];

  for(const item of data){
    item.tech.reduce((acc: Array<string>, val: string) => { 
      if(!tech.includes(val)){
        tech.push(val);
      }
      return acc;
    },[])
  }

  return tech;
}

export {
    filterByTech,
    paginate,
    filters
}