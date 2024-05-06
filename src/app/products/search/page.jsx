import Footer from "@/components/Footer";
import SearchProductContainer from "@/containers/SearchProductContainer";


export default function SearchPage(request) {
  return (
    <>
      <SearchProductContainer request={request}/>
      <Footer />
    </>
  );
}

