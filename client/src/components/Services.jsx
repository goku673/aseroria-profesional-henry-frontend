import { Link, } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Services = () => {


  return (
    <div id="services" className="flex flex-col items-center justify-center grid-rows-7 h-screen bg-slate-300 pt-20">
      <div className="div1 col-span-7 row-span-1 flex items-center justify-center">
        <p className="bg-slate-600 rounded font-bold text-3xl leading-10 text-white text-center w-[300px]">
          What we offer?
        </p>
      </div>

      <div className="flex items-center w-1/2 bg-white mx-auto justify-center py-20 my-20">
        <div className="bg-white flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Service</h2>
          <p className="text-gray-600 text-justify w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet laoreet felis, quis cursus nibh auctor ac. Nulla nisi nunc, tristique ut fringilla sit amet, interdum vel dui. Etiam magna turpis, cursus vel rutrum id, tincidunt in risus. Curabitur cursus fermentum lectus, vel ornare orci efficitur nec. Sed luctus, nisl non lacinia eleifend, sem lorem tincidunt risus, a sagittis risus mi eu nunc. In vel consequat dui. Nam nibh enim, posuere id ex ac, molestie ultrices quam. Nulla facilisi. Sed blandit sem sit amet congue scelerisque. Ut quis auctor leo, id iaculis diam. Nulla facilisi. Fusce nec condimentum mi. Morbi consequat id quam eu pharetra.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a diam aliquet, semper erat non, placerat ligula. Maecenas aliquet vestibulum egestas. Nulla vel feugiat dolor. Quisque eget cursus tellus, vel suscipit massa. Sed faucibus sollicitudin risus, nec sagittis leo lacinia eu. Fusce iaculis ex augue. Sed cursus enim in euismod aliquam. Pellentesque aliquam urna quis porta vestibulum. Phasellus a ex lobortis nibh vulputate elementum. Integer mattis tempus augue, malesuada scelerisque mi sodales non. In et condimentum purus. Donec a ornare lectus. Pellentesque eget dapibus tortor. Vivamus pellentesque lacus a commodo egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>

      <div className="div2 col-span-7 row-span-1 flex items-center justify-center mt-10">
            <Link to="/allServices"
            className="text-blue-950 font-bold mb-20 bg-white rounded-md py-4 w-[200px] flex justify-center items-center shadow-lg hover:transition-all hover:bg-blue-950 hover:text-white">
             Go to Services
          </Link>      
      </div>

    </div>
  );
};

export default Services;



