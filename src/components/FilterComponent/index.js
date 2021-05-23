import Select from "./styledComponents";
import { useGlobalContext } from "../../context";
function FilterComponent() {
    const { moviesData, setMoviesData, tempData } = useGlobalContext();

    const OnChnageSetFilterData = (e) => {
        let searchData = moviesData.filter(eachMovie => eachMovie.language === e.target.value)
        if (e.target.value === 'all') {
            setMoviesData(tempData)
        }
        else {
            setMoviesData(searchData)
        }
        

    }
    return (
        <div>
            <Select name="type" id="plan" onChange={OnChnageSetFilterData}>
                <option value="all" selected>All</option>
                <option value="en">En</option>
                <option value="fr" >Fr </option>
                <option value="ja">Ja</option>

            </Select>
        </div>

    )
}

export default FilterComponent;