import './MainCommunity.scss';

function BoardCommunity() {
    return (
        <div class="board">
            <table>
                <tr class="board-head">
                    <th class="sort-desc board-number"><p>글번호</p></th>
                    <th class="unsort board-category"><p>분류</p></th>
                    <th class="unsort board-title"><p>제목</p></th>
                    <th class="unsort board-writer"><p>작성자</p></th>
                    <th class="unsort board-date"><p>작성일</p></th>
                    <th class="unsort board-visit"><p>조회수</p></th>
                </tr>
                <tr class="board-list important">
                    <td class="post-number"><p>101</p></td>
                    <td class="post-category"><p>공지</p></td>
                    <td class="post-title"><p>엠시스가 또 위기에 놓였습니다</p></td>
                    <td class="post-writer"><p>정준호</p></td>
                    <td class="post-date"><p>2023-07-14</p></td>
                    <td class="post-visit"><p>235</p></td>
                </tr>
                <tr class="board-list unimportant">
                    <td class="post-number"><p>95</p></td>
                    <td class="post-category"><p>공지</p></td>
                    <td class="post-title"><p>소프트웨어야 놀자! 봉사활동 참가 신청( ~ 7/24)</p></td>
                    <td class="post-writer"><p>정준호</p></td>
                    <td class="post-date"><p>2023-07-12</p></td>
                    <td class="post-visit"><p>80</p></td>
                </tr>
                <tr class="board-list unimportant">
                    <td class="post-number"><p>56</p></td>
                    <td class="post-category"><p>공지</p></td>
                    <td class="post-title"><p>천원의 아침밥</p></td>
                    <td class="post-writer"><p>정준호</p></td>
                    <td class="post-date"><p>2023-07-03</p></td>
                    <td class="post-visit"><p>30</p></td>
                </tr>
            </table>

            <div class="pagination">
                <ul class="pagination-modal">
                    {/* 준호 작업 공간 */}
                </ul>
            </div>
        </div>
    )
}

function CategoryCommunity() {
    return (
        <section class="category">
            <div class="category-buttons">
                <button class="category-button-on" value="notice"><h5>공지사항</h5></button>
                <button class="category-button-off" value="introduction"><h5>자기소개</h5></button>
                <button class="category-button-off" value><h5>자유게시판</h5></button>
                <button class="category-button-off" ><h5>졸업생게시판</h5></button>
                <button class="category-button-off" ><h5>자료실</h5></button>
            </div>
        </section>
    )
}

export default BoardCommunity;
export { CategoryCommunity };