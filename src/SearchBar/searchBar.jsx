import { useState } from "react"
import { BsSearch } from "react-icons/bs"

const SearchBar = ({searchItems})=>{
    const [value , setValue]= useState('')
    const onSubmit = e => {
        e.preventDefault();
        searchItems(value)
    }
    return (
        <form className="search flex-fill d-flex align-items-center" onSubmit={onSubmit}>
            <div className="input-group">
                <input type="text" className="form-control rounded-end pe-5 boorder-success" placeholder="جستجوی فست فود ..." value={value} onChange={e => setValue(e.target.value)} />
                <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3"/>
            </div>
        </form>
    )
}
export default SearchBar