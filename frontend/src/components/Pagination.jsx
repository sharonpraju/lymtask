import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({
    pageCount,
    paginationFun,
    currentPage,
}) {
    let active = currentPage;
    let items = [];
    for (let page = 1; page <= pageCount; page++) {
        items.push(
            <Pagination.Item
                key={page}
                active={page === active}
                className={`${'text-primary'} ${page === active ? ("d-block") : ("d-none")} d-md-block`}
                onClick={() => { paginationFun(page) }}
            >
                {page}
            </Pagination.Item>,
        );
    }

    return (
        <>
            {pageCount >= 1 &&
                <Pagination size={"sm"} className={`mb-5 pagination flex-wrap d-flex justify-content-end`}>
                    <Pagination.First
                        onClick={() => {
                            paginationFun(1)
                        }}
                    />
                    <Pagination.Prev
                        onClick={() => {
                            currentPage > 1
                                ? paginationFun(currentPage - 1)
                                : paginationFun(currentPage)
                        }}
                    >
                    </Pagination.Prev>
                    {items}
                    <Pagination.Next
                        onClick={() => {
                            currentPage < pageCount
                                ? paginationFun(currentPage + 1)
                                : paginationFun(currentPage)
                        }}
                    >
                    </Pagination.Next>
                    <Pagination.Last
                        onClick={() => {
                            paginationFun(pageCount)
                        }}
                    />
                </Pagination>
            }
        </>
    );
}

export default PaginationComponent;