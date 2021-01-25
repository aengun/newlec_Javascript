class NoticeList extends React.Component {

	constructor() {
		super();
	}

	render() {
		return <main className="main">
			<h2 className="main title">공지사항</h2>

			<div className="breadcrumb">
				<h3 className="hidden">경로</h3>
				<ul>
					<li>home</li>
					<li>고객센터</li>
					<li>공지사항</li>
				</ul>
			</div>

			<div classNameName="search-form margin-top first align-right">
				<h3 classNameName="hidden">공지사항 검색폼</h3>
				<form classNameName="table-form">
					<fieldset>
						<legend classNameName="hidden">공지사항 검색 필드</legend>
						<label classNameName="hidden">검색분류</label>
						<select name="f">
							<option value="title">제목</option>
							<option value="writerId">작성자</option>
						</select>
						<label classNameName="hidden">검색어</label>
						<input type="text" name="q" value="" />
						<input classNameName="btn btn-search" type="submit" value="검색" />
					</fieldset>
				</form>
			</div>

			<div classNameName="notice margin-top">
				<h3 classNameName="hidden">공지사항 목록</h3>
				<table classNameName="table">
					<thead>
						<tr>
							<th classNameName="w60">번호</th>
							<th classNameName="expand">제목</th>
							<th className="w100">작성자</th>
							<th className="w100">작성일</th>
							<th className="w60">조회수</th>
						</tr>
					</thead>
					<tbody>

						<tr>
							<td></td>
							<td className="title indent text-align-left"><a href=""></a></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="indexer margin-top align-right">
				<h3 className="hidden">현재 페이지</h3>
				<div>
					<span className="text-orange text-strong"></span> / pages
			</div>
			</div>

			<div className="margin-top align-center pager">

				<div>
					<a className="btn btn-prev" href="?p=&f=&q=">이전</a>
					<span className="btn btn-prev" onClick={()=>{alert('이전 페이지가 없습니다.');}}>이전</span>
				</div>

				<ul className="-list- center">
					<li><a className="-text-" href="?p=&f=&q="></a></li>
				</ul>

				<div>
					<a className="btn btn-next" href="?p=&f=&q=">다음</a>
					<span className="btn btn-next" onclick="alert('다음 페이지가 없습니다.');">다음</span>
				</div>

			</div>
		</main>
	}
}

ReactDOM.render(
	<NoticeList />,
	document.querySelector("#main")
);