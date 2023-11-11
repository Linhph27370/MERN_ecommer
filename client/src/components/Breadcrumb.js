import React from 'react'
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
const Breadcrumb = ({title , category}) => {
  console.log({title, category});
  const productId = { 1: "/:categoy/:pid/:title" };
  

  const DynamicProductBreadcrumb = ({ match }) => (
    <span>{productId[match.params.pid]}</span>
  );
  const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
  const routes = [
    // { path: "/category/:pid", breadcrumb: DynamicProductBreadcrumb },
    
    { path: "/", breadcrumb: "home" },
    { path: "/:category", breadcrumb: category },
    { path: "/:categoy/:pid/:title", breadcrumb: title, DynamicProductBreadcrumb },
    {
      path: "/custom-props",
      breadcrumb: CustomPropsBreadcrumb,
      props: { someProp: "Hi" },
    },
  ];
  const breadcrumbs =useBreadcrumbs(routes)
  console.log(breadcrumbs);
  return (
    <div className='text-sm'>
       {breadcrumbs?.filter(el => !el.match.route === false).map(({ match, breadcrumb } , index, self) => (
        <NavLink className='hover:text-main capitalize' key={match.pathname} to={match.pathname}>
          {breadcrumb} {index !== self.length-1 && ' > ' }
        </NavLink>
      ))}
    </div>
  )
}

export default Breadcrumb