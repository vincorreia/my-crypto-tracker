import "./Pagination.css"
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    page: number;
    maximum?: number;
    path?: string;
}

export default function Pagination(props:Props) {
    var page:number;
    var path: string;
    if(props.path){
        path = props.path;
    } else{
        path = "";
    }

    const min = path + "/";
    const max = path + "/" + props.maximum;
    

    if(props.maximum && props.page > props.maximum){
        page = props.maximum;
    } else {
        page = props.page;
    }
    

    function createPageNumbers(page:number, max?:number){
        var pages: number[] = [];

        for(let i = page - 2; page + 2 >= i ; i++){
            if(i > 0){
                if(max && i > max){
                    page--;
                } else{
                    pages.push(i);
                }
            }
        }

        pages.sort((a:number, b:number) => a - b);
        return pages;
    }

    function createPageButtons(pageNumbers:Number[], min:string, max:string, page:number){
        var pageButtons:React.ReactElement[] = [];

        const maxNumber = Number(max.slice(1));

        // as the minimum number is always going to be 1, we will not need to get it from the min argument.
        // if the page is < (minimum number + 2)  or page is > (maximum number - 2) 
        // we want to return less values than the complete amount that we usually do

        if(page > 3){
        const minButton = <Link key={page - 3} to={min}>⟪</Link>;
        pageButtons.push(minButton);

        const previousButton = <Link key={page - 2} to={`/${page - 1}`}>⟨</Link>;
        pageButtons.push(previousButton);

        }
        pageNumbers.forEach((pageNumber, i) => {

            var _class:string;
            if(pageNumber === page){
                _class = "pagination-number page-marker"
            } else{
                _class = "pagination-number"
            }

            const pageButton = <Link key={i} to={`/${pageNumber}`} className={_class}>{pageNumber}</Link>
            pageButtons.push(pageButton);
        })

        if(page < maxNumber - 2){
        
        const nextButton = <Link key={page + 2} to={`/${page + 1}`}>⟩</Link>;
        pageButtons.push(nextButton);
        const maxButton = <Link key={page + 3} to={max}>⟫</Link>;
        pageButtons.push(maxButton);
        }

        return pageButtons;
    }

    const pageNumbers = createPageNumbers(page, props.maximum);

    const pageButtons = createPageButtons(pageNumbers, min, max, page);

    return (
        <div className="pagination-wrapper flex-row justify-center">
            <div className="flex-row gap-1">
                {pageButtons.map(button => {
                    return button;
                })}
            </div>
        </div>
    )
}
