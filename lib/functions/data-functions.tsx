import { education, experince, project } from '../constants/data-types';

const filterByTech = (data: Array<education | experince | project >, tech: string) => {
  return data.filter(item => item.tech.includes(tech));
}

const paginate  = (data: Array<education | experince | project >, perPage: number = 10) => {
 if(data.length < perPage) return [data];
 ;
  
 const pages: Array<Array<education | experince | project >> = [];
  
   data.reduce((acc: Array<education | experince | project >, val: education | experince | project, index: number) => {
    
    if(acc.length <= perPage){ //keep adding items to acc till qouta reached
      acc.push(val);

      if(index === data.length -1){ // catch last page with less items
        pages.push(acc);
        return acc;
      }
    }
    else{
      pages.push(acc); //push paged items to pages
      acc = [];
    }
    return acc;
   },[])

 return pages;
}

export {
    filterByTech,
    paginate,
}