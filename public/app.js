$(document).ready(function({
	display();
	let input = $('#inp');
	let btn = $('#btn');
	let result = $('#result');
	// body...
	btn.click(function(){
		let value=inp.val();
		add(value);
	});

	function add(val){
		$.ajax({
			url: '/add',
			method: 'post',
			data:{todo:val},
			success: function(data) {   //it tells that data is successfully send
				let value = `<li>
								<input type = "hidden">
								<span>$(data)</span>
								<button.onclick = "update(this)">update</button>
								<button.onclick = "deletee(this)">Delete</button
							</li>`
				result.append(value);
			}
		})
	}

	function display(val){
		$.ajax({ 	
			url: '/display',
			method: 'get',
			data:{todo:val},
			success: function(data) {   //it tells that data is successfully send
				data.forEach(function({
					let value = `<li>
                                	<input type="hidden">
                    	            <span>${d}</span>
                    	            <button.onclick = "update(this)">update</button>
                        	        <button onclick="deletee(this)">Delete</button>
                            	 </li>`

                    result.append(value);
				})
			}
		})
	}
})

function update(id, val){
	$.ajax({
		url: '/update',
		method: 'post',
		data:{old:val, new:val2},
		success: function(data) {   //it tells that data is successfully send
			    let sibling = $(el).prev();
    			let grandSibling = sibling.prev();
    			let val = grandSibling.val();
    			if(val) {
       				$(el).prev().text(val);
    			}
    			grandSibling.attr('type', 'hidden');
  				let val2 = $(el).parent().index(); 
		}
	})
}

function deletee(el) {
    let index = $(el).parent().index();
    $.ajax({
        url: '/delete',
        method: 'post',
        data: {id: index},
        success: function() {
            $(el).parent().remove();
        }
    })

}
