//1 intiate a XMLhttp
const http = new XMLHttpRequest(); 
//2 - set an event listner to detect state change
http.addEventListener('readystatechange', () => {
    //console.log(http.readyState);
    if (http.readyState === http.DONE){
        if(http.status === 200){
            const members = JSON.parse(http.responseText);
            $(`#loader`).hide();
            if (members.length === 0){
                $('#tbl-members').addClass('empty');
            }
            members.forEach(member => {
                const rowhtml = `
                <tr>
                    <td>${member.id}</td>
                    <td>${member.name}</td>
                    <td>${member.address}</td>
                    <td>${member.contact}</td>
                </tr>
            `;
            //console.log(members);
            //${`#tbl-members tbody`}
            $('#tbl-members tbody').append(rowhtml);
            });
            
        }else{
            $("#toast").show();
            //console.error('something went wrong**********')
        }
    }           
});

//3 open the request
http.open('GET', 'https://d80c3676-8607-4b01-bb29-ba170b2ef201.mock.pstmn.io/members', true)

//4 set additional info for the request

//5 send the request
http.send();