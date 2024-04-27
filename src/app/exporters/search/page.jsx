import Footer from "@/components/Footer";
import HeaderContainer from "@/containers/HeaderContainer";
import SearchExporterContainer from "@/containers/SearchExporterContainer";


export default function SearchPage(request) {

  return (
    <>
      <SearchExporterContainer request={request}/>
      <Footer/>
    </>

  );
}

