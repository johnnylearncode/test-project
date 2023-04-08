
(function main() {
    (function deleteUser() {
        $$('td.delete-employee a').forEach((tag) => {
            tag.onclick = async (e) => {
                if (confirm('Bạn chắc chắn muốn xoá nhân viên này chứ? Dữ liệu đã xoá không thể khôi phục!')) {
                    const id = tag.getAttribute('id_user');
                    await fetch(`/api/admin/delete-employee/${id}`, {
                        method: "DELETE",
                    })
                        .then((response) => {
                            alert('Xoá nhân viên thành công!');
                            window.location.href = "http://localhost:3000/admin/category/employee/employee-list";
                        })
                }
            }
        })
    })();

    (function sortingEvent() {
        
    })();

})();

$('.table_title #employee_code i').onclick= function(e) {
    let emCode = [...$$('.body')];
    //console.log(emCode);
    let sortList = emCode.map(function(tag) {
        let empCode = tag.querySelector('#employee_code');
        return {
            id: tag.id,
            employee_code: empCode.innerText
        };
    })
    sortList.sort();
    console.log(sortList);
}
$('.table_title #name i').onclick= function(e) {
    console.log(e.target);
}
$('.table_title #gender i').onclick= function(e) {
    console.log(e.target);
}
$('.table_title #birthday i').onclick= function(e) {
    console.log(e.target);
}
$('.table_title #birthplace i').onclick= function(e) {
    console.log(e.target);
}
$('.table_title #identifier i').onclick= function(e) {
    console.log(e.target);
}
$('.table_title #status i').onclick= function(e) {
    console.log(e.target);
}