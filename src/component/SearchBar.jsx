import { useContext } from "react"
import { ThemeContext } from './../App';
import { RegionDropDownList } from "./RegionDropDownList";
import { SubRegionDropDownList } from "./SubRegionDropDownList";
import { SortDropDownList } from "./SortDropDownList";

export const SearchBar = ({ setRegion, searchResult, setSearchResult, subRegionList,
    setSubRegion, setSortChange, regionList }) => {

    const [darkTheme, setDarkTheme] = useContext(ThemeContext);

    const handleSearchResult = (event) => {
        setSearchResult(event.target.value)
    }




    return (
        <div className={darkTheme && 'search darkMode' || 'search'}>

            <input onChange={handleSearchResult} className="searchBarWidth" type="search" placeholder="Search" aria-label="Search"
                value={searchResult} />

            < SortDropDownList
                setSortChange={setSortChange}
            />

            < RegionDropDownList
                setRegion={setRegion}
                setSubRegion={setSubRegion}
                regionList = {regionList}
            />

            <SubRegionDropDownList
                subRegionList={subRegionList}
                setSubRegion={setSubRegion}
            />

        </div>
    )
}
