import './Navdesign.scss';
import React, { useState, useEffect } from 'react'; //리액트 동적변수, 이펙트 사용
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //페이지이동 import

function Nav(){

// 토글메뉴는 닫아두기 위해 초기값을 false로 설정해두었다.
const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div>
      {isCheck ? 
      <button class="toggle-button"
      onClick={() => {
        // setCheck로 state값을 변경해주자.
        // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
        setCheck((e) => !e);
      }}
      >
        메뉴닫힘
      </button>
    : 
      <button class="toggle-button"
      onClick={() => {
        // setCheck로 state값을 변경해주자.
        // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
        setCheck((e) => !e);
      }}
    >
        메뉴열림
    </button> }


      </div>
      

      {isCheck &&


        <table class="nav_table">
        <th colspan="5">
            <b>X</b>
        </th>
        <tr>
            <td class="descript"><b><Link to="/">EMSYS</Link></b></td>
            <td>소개</td>
            <td>구성</td>
            <td>수상</td>
            <td colspan="2">갤러리</td>
        </tr>
        
        <tr>
            <td class="descript"><b><Link to="/community">커뮤니티</Link></b></td>
            <td>공지사항</td>
            <td>자기소개</td>
            <td>자유게시판</td>
            <td>졸업생게시판</td>
            <td>자료실</td>
        </tr>

        <tr>
            <td class="descript"><b>엠소스</b></td>
            <td>프로젝트</td>
            <td>스터디</td>
            <td>백준해설</td>
            <td colspan="2">블로그</td>
        </tr>
        <tr>
            <td class="descript"><b>도서대여</b></td>
            <td colspan="5">도서대여</td>
        </tr>
        <tr>
            <td class="descript"><b>운영</b></td>
            <td>건의사항</td>
            <td colspan="4">QnA</td>
        </tr>
        <tr>
            <td class="descript"><b>백준</b></td>
            <td colspan="5">백준</td>
        </tr>
        <tr>
            <td class="descript" colspan="6"><b>마이페이지</b></td>
        </tr>
        <tr>
            <td class="descript" colspan="6"><b>로그아웃</b></td>
        </tr>
        </table>


      }
    </>
  );
}



export default Nav;