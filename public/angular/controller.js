var app = angular.module("appName", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider    
		.when('/NoiDung', {
			templateUrl: 'noidungtho.html',
			controller: 'NoiDungCtrl'

		})
		.when('/ThemTacGia', {
			templateUrl: 'themtacgia.html',
			controller: 'ThemTacGiaCtrl'
		})
		.when('/ThemTho', {
			templateUrl: 'themtho.html',
			controller: 'ThemThoCtrl'
		})
		.when('/TheLoai', {
			templateUrl: 'theloai.html',
			controller: 'TheLoaiCtrl'
		})
			.when('/ChuDe', {
			templateUrl: 'chude.html',
			controller: 'ChuDeCtrl'
		})
		.when('/TacGia', {
			templateUrl: 'tacgia.html',
			controller: 'TacGiaCtrl'
		})
		.when('/DanhSach', {
			templateUrl: 'danhsach.html',
			controller: 'DanhSachCtrl'
		})
		.when('/ThongBao', {
			templateUrl: 'thongbao.html',
		})
		.when('/SuaTacGia', {
			templateUrl: 'suatacgia.html',
		})
		.when('/SuaTho', {
			templateUrl: 'suatho.html',
		})

});


const firebaseConfig = {
apiKey: "AIzaSyBqKcDmnRUYGmw-4kqXTl2b30OzlCsBmxc",
authDomain: "angular-4c414.firebaseapp.com",
databaseURL: "https://angular-4c414-default-rtdb.firebaseio.com",
projectId: "angular-4c414",
storageBucket: "angular-4c414.appspot.com",
messagingSenderId: "1004230537180",
appId: "1:1004230537180:web:55da2224b90556b0642919",
measurementId: "G-RPEM5DWVN0"
};

firebase.initializeApp(firebaseConfig);
var ref = new Firebase("https://angular-4c414-default-rtdb.firebaseio.com");
app.controller('DanhSachCtrl', function($scope){

})

function danhSachChuDe() {
		var arr=[]

		var leadsRef = ref.child('ChuDe');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();

		      arr.push(childData);

		    });

		});
		
		return arr;
}

function getChuDeBystt(stt) {
		var arr=[]
		let ten;
		var leadsRef = ref.child('ChuDe');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      if(childData.stt==stt)
		      {
		      	ten= childData.tenChuDe;
		  		}
		    });

		});
		
		return ten;
}



function danhSachTheLoai() {
		let arr=[]
		var leadsRef = ref.child('TheLoai');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      arr.push(childData);
		    });

		});
		return arr;
}



function getId() {
		let arr=[]
		var leadsRef = ref.child('id');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      arr.push(childData);
		    });

		});

		return arr;
}
let id= getId();

function danhSachTacGia() {
		let arr=[]
		var leadsRef = ref.child('TacGia');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      arr.push(childData);
		    });

		});

		return arr;
}


function danhSachTho() {
		let arr=[]
		var leadsRef = ref.child('Tho');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      arr.push(childData);
		    });

		});
		return arr;
}
function danhSachThoUpdate() {
	let arr=[]
	var leadsRef = ref.child('Tho').limitToLast(5);
	leadsRef.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var childData = childSnapshot.val();
		  arr.push(childData);
		});

	});
	return arr;
}
function danhSachThoTheoTacGia(TacGia) {
		let arr=[]
		var leadsRef = ref.child('Tho');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      if(childData.tacGia==TacGia)
		      {
		      	arr.push(childData);
		      }
		    });

		});
		return arr;
}
function danhSachThoTheoTheLoai(TheLoai) {
		let arr=[]
		var leadsRef = ref.child('Tho');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      if(childData.theLoai==TheLoai)
		      {
		      	arr.push(childData);
		      }
		    });

		});
		return arr;
}
function danhSachThoTheoChuDe(chude) {
		let arr=[]
		var leadsRef = ref.child('Tho');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		     	for(let i=0; i<childData.chuDe.length;i++)
		     	{
		     		if(childData.chuDe[i].tenChuDe==chude)
		     			{	
							arr.push(childData);
		     			}
		     	}
		    });

		});
		return arr;
}
function ChiTietTho(tacGia,tenTho) {
		let arr=[]
		var leadsRef = ref.child('Tho');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      if(childData.tacGia== tacGia && childData.tenBaiTho==tenTho)
		      {
		      	arr.push(childData);
		      }
		    });

		});
		return arr;
}

function ChiTietTacGia(tenTacGia) {
		let arr=[]
		var leadsRef = ref.child('TacGia');
		leadsRef.on('value', function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      if(childData.tenTacGia==tenTacGia)
		      {
		      	arr.push(childData);
		      }
		    });

		});
		return arr;
}
function removeChuDe(stt)
{

	
	for(let i= 0; i< danhSachTho().length;i++)
	{
	
		for(let j =0; j<danhSachTho()[i].chuDe.length;j++)
		{
			var wishlistObj = danhSachTho()[i].chuDe;
			var keysArray = Object.keys(wishlistObj);

			for (let i = 0; i < keysArray.length; i++) 
			{
		    	var key = keysArray[i];
		    	var value = wishlistObj[key];
		    	if (value === getChuDeBystt(stt) ) 
		    	{
		    	console.log("key"+key);
		        ref.child("Tho").child("chuDe").child(key).remove() 
				}
			}
		}


	}
}

let arrChuDe= null;
let arrTacGia=  null;
let arrTheLoai=  null;
let arrTho=  null;




let ThoDuocChon=null;
let chontheloai= null;
let chonchude = null;
let chontacgia= null;

let local="";
app.controller('MainCtrl', function($scope,$location,$interval)
{	
	$scope.search;


	$scope.showXoa =false;

	$scope.xoa= function()
	{

		$scope.showXoa= !$scope.showXoa;
		if($scope.showSua=true)
		{
			$scope.showSua=false;
		}
	}
	$scope.sua= function()
	{
		$scope.showSua= !$scope.showSua;
		if($scope.showXoa=true)
		{
			$scope.showXoa= false;
		}
	}

	$scope.fight = function()
	{	
		id=[];
		arrChuDe=[];
		arrTacGia=[];
		arrTho=[];
		id= getId();
		 arrChuDe= danhSachChuDe();
		 arrTacGia= danhSachTacGia();
		 arrTheLoai= danhSachTheLoai();
		 arrTho= danhSachTho();

		 $scope.danhSachTacGia= danhSachTacGia();
		 local= $location.url();
		 if(local!="/ThongBao" ||local!="/SuaTho"||local!="/SuaTacGia")
		 {
		 	$scope.huy="Hủy";
		 
		 	$scope.mess="";

		 	
		 }

		 console.log($scope.mess);
		 if(local!="/NoiDung")
		 {
			$scope.NDtacgia=null;
			$scope.NDquocgia=null;
			$scope.NDtieusu=null;
			$scope.theloai=null;
			$scope.namsangtac=null;
			$scope.NDchude=null;
			$scope.NDcungTacGia= null;
		 }
		 console.log($scope.messsua);


	}

	fight = $interval($scope.fight,0.001);
	
	$scope.danhSachNew=danhSachThoUpdate();

	

	$scope.xemnoidung= function(a)
	{
		ThoDuocChon=a;
		

		
		if( ChiTietTacGia(ThoDuocChon.tacGia)[0].namMat==".")
		{
			$scope.NDtacgia=ChiTietTacGia(ThoDuocChon.tacGia)[0].tenTacGia+'('+ChiTietTacGia(ThoDuocChon.tacGia)[0].namSinh+')';
		}
		else
		{
			$scope.NDtacgia=ChiTietTacGia(ThoDuocChon.tacGia)[0].tenTacGia+'('+ChiTietTacGia(ThoDuocChon.tacGia)[0].namSinh+'-'+ChiTietTacGia(ThoDuocChon.tacGia)[0].namMat+')';
		}
		
		console.log(ChiTietTacGia(ThoDuocChon.tacGia)[0])
		console.log(getId()[0])
	
		$scope.NDquocgia=ChiTietTacGia(ThoDuocChon.tacGia)[0].quocGia;
		$scope.NDtieusu=ChiTietTacGia(ThoDuocChon.tacGia)[0].tieuSu;
		$scope.theloai= ThoDuocChon.theLoai;
		$scope.namsangtac= ThoDuocChon.namSangTac;
		$scope.NDchude= ThoDuocChon.chuDe;
		$scope.chitet= ThoDuocChon;
		
		$scope.NDcungTacGia = danhSachThoTheoTacGia(ThoDuocChon.tacGia);

	var html = document.getElementById('textTho');

	html.innerHTML=ThoDuocChon.noiDung;
	local=$location.url();
	console.log(ThoDuocChon.noiDung)
	
	}

	$scope.chonTheLoai=function(a)
		{
		chontheloai= a.tenTheLoai;
		}
	$scope.chonChuDe=function(a)
		{
		chonchude= a.tenChuDe;
		}
	$scope.chonTacGia= function(a)
		{
		chontacgia = a.tenTacGia;
		}



//////////SỬA////////////////////

	$scope.huy= "hủy"
	let oldname=null;
	$scope.tacgia= null;
	$scope.tho= null;
	$scope.ChonSua = function(tacgia,loai)
	{
		if(loai== 'tacgia'){
			$scope.tacgia= tacgia;
			oldname= tacgia.tenTacGia;
		}
		if(loai== 'tho')
		{
			console.log(loai);
			$scope.tho= tacgia;
		}

	}	
	$scope.SuaTho = function()
	{
		$scope.mess= "Sửa thành công";
		let thoedit =$scope.tho;
		ref.child("Tho").child(String(thoedit.stt)).set(thoedit);
	console.log("sửa thành công");
	$scope.messinfo= "Sửa thành công";
	}

	$scope.SuaTacGia= function()
	{
	
		let tg=  $scope.tacgia;
		
		$scope.mess= "Sửa thành công";
		console.log($scope.messsua);
		//// updatconsole.log();e tên bài thơ
		let lst = danhSachThoTheoTacGia(oldname);

		ref.child("TacGia").child(String(tg.stt)).update(tg);
		if(oldname!=tg.tenTacGia)
		{
			for(let i =0; i< lst.length;i++)
			{
				ref.child("Tho").child(lst[i].stt).child("tacGia").set(tg.tenTacGia);

			}
			
		}


	//	ref.child("TacGia").child(id[0].idTacGia+1).set(a[0]);
	}

////////////////
//..........xóa............

let chonxoa;
let loaixoa;
//	$scope.huy= "Hủy"
	
	$scope.ChonXoa= function(a,b) // a giá trị xóa, b { tác giả, tác phẩm, chủ đề}
	{
		chonxoa= a;
		loaixoa= b;
		
		console.log(b);

	}





	$scope.XoaData= function(a)
	{
		if(loaixoa=="tacgia")
		{

		var link = document.getElementById('a');
		link.setAttribute("href", "#!/TacGia");

		}
		else if(loaixoa=='chude')
		{
			var link = document.getElementById('a');
			link.setAttribute("href", "#!/ChuDe");

		}
		else if(loaixoa=='tho')
		{
			var link = document.getElementById('a');
			link.setAttribute("href", "#!/DanhSach");

		}


		if(a=="no")
		{
			chonxoa=null;
			$scope.messinfo="";

			loaixoa= null;
		}
		else 
		{
			if(loaixoa=='tacgia')
			{
				ref.child("TacGia").child(chonxoa).remove();
				$scope.mess="xóa tác giả thành công";
				$scope.huy= "Trở về"
			}
			if(loaixoa=='chude')
			{
				ref.child("ChuDe").child(chonxoa).remove();
				$scope.mess="xóa chủ đề thành công";
				$scope.huy= "Trở về"
				removeChuDe(chonxoa);

			}
			if(loaixoa=='tho')
			{
				console.log(a);
				ref.child("Tho").child(chonxoa).remove();
				$scope.mess="xóa thơ thành công";
				$scope.huy= "Trở về"
			}


		}
	}

	$scope.changeFilter=false;

///////////SỬA////////////////

	
	

	
	
})



app.controller('NoiDungCtrl', function($scope,$location){

	

	var html = document.getElementById('textTho');
	html.innerHTML=ThoDuocChon.noiDung;
	local=$location.url();
	






})
 
app.controller('ChuDeCtrl', function($scope,$location){	
	

		$scope.danhSachChuDe=[];
		$scope.danhSachChuDe=arrChuDe;
	
		console.log();





})

app.controller('TheLoaiCtrl', function($scope){
		$scope.danhSachTheLoai=arrTheLoai;


		
})

app.controller('TacGiaCtrl', function($scope){

		$scope.danhSachTacGia=arrTacGia;
		console.log($scope.danhSachTacGia)

		
})

app.controller('DanhSachCtrl', function($scope){

		if(chontheloai!=null)
		{
			
			$scope.danhSachTho=danhSachThoTheoTheLoai(chontheloai);
		;
			console.log(chontheloai);		
			chontheloai=null
		}
		else if(chonchude!=null)
		{
			
			$scope.danhSachTho=danhSachThoTheoChuDe(chonchude);
			console.log($scope.danhSachTho);		
			chonchude=null;
		}
		else if(chontacgia!=null)
		{

			$scope.danhSachTho=danhSachThoTheoTacGia(chontacgia)
			console.log($scope.danhSachTho);
			console.log(chontacgia);		
			chontacgia=null;
		}
		

		else
		{
			
			
			$scope.danhSachTho=danhSachTho();
		}

		
})



app.controller('ThemThoCtrl', function($scope){
let tempchude=[];
		$scope.danhSachTacGia=arrTacGia;
		
		$scope.addtag= function()
		{
			var html = document.getElementById('tagchude');

			if($scope.tagchude!=null &&(tempchude.indexOf($scope.tagchude) ==-1) )
			{
				let t=[{tenChuDe:$scope.tagchude}];
				tempchude.push(t);
				html.innerHTML=html.innerHTML+ " <a ng-click='xoa()'  ng-show='huy' class='badge badge-info'>"+$scope.tagchude+"</a> "
				$scope.tagchude=null;
			
			}
			else
			{
					$scope.mess="Tag bị trùng";
			}

		}
		$scope.xoa =function()
		{
			$scope.huy= false;
					console.log(html);
		}
		$scope.themtho= function()
		{
			$scope.mess=""
			if($scope.tenbaitho==null)
			{
				$scope.mess="Bạn chưa nhập tên bài thơ"
			}
			else if($scope.namsangtac==null)
			{
				$scope.mess="Bạn chưa nhập năm sáng tác"
			}
			else if($scope.tacgia==null)
			{
				$scope.mess="Bạn chưa nhập tên tác giả"
			}
			else if($scope.theloai==null)
			{
				$scope.mess="Bạn chưa nhập thể loại"
			}
			else if($scope.noidung==null)
			{
				$scope.mess="Bạn chưa nhập nội dung"
			}
			else
			{
				lst=[];
				let t=[{tenChuDe:"Thơ"}];
				tempchude.push(t);
				let i=0;
				for ( i; i< tempchude.length;i++)
				{
					let t= true;

					for (let j=0;j< (Object.keys(danhSachChuDe()).length);j++)
					{
						if(tempchude[i][0].tenChuDe==danhSachChuDe()[j].tenChuDe)
						{
								t= false;
						}
					}
					if(t==true)
					{
					
						tempchude[i][0].stt= id[0].idChuDe+1+i;
						ref.child("ChuDe").child(String(id[0].idChuDe+1+i)).set(tempchude[i][0]);
					
						ref.child('id').child('id').child('idChuDe').set(id[0].idChuDe+1+i);
						console.log(tempchude);

					}
					lst.push(tempchude[i][0]);


				}	
				$scope.noidung=$scope.noidung.replaceAll('\n', '<br>')
				let a= [{
				"stt":id[0].idTho+1,
				"tenBaiTho": $scope.tenbaitho,
				"namSangTac": $scope.namsangtac,
				"theLoai":$scope.theloai,
				"tacGia":$scope.tacgia,
				"noiDung":$scope.noidung,
				"chuDe":lst
				}]
				/// add vào object thơ
				console.log(lst);
				$scope.mess="Thành Công"
				ref.child("Tho").child(String(id[0].idTho+1)).set(a[0]);	
				ref.child('id').child('id').child('idTho').set(id[0].idTho+1);
			//	
					


				$scope.tenbaitho=null;
				$scope.namsangtac=null;
				$scope.theloai=null;
				$scope.tacgia=null;
				$scope.noidung=null;
				tempchude=[]
				var html = document.getElementById('tagchude');
				html.innerHTML = '';
				getId()
				

				


			}
		}

		
})
app.controller('ThemTacGiaCtrl', function($scope){

		$scope.them=function()
		{
			if($scope.ten==null)
			{
				$scope.mess="Bạn chưa nhập tên tác giả"
			}
			else if($scope.namsinh==null)
			{
				$scope.mess="Bạn chưa nhập năm sinh"
			}
			else if ($scope.quocgia==null) {
				$scope.mess="Bạn chưa nhập quốc gia"
			}
			else if ($scope.tieusu==null) {
			$scope.mess="Bạn chưa nhập tiểu sử"
			}

			else
			{

					let t= true;
					for (let j=0;j< (Object.keys(arrTacGia).length);j++)
					{
						if(arrTacGia[j].tenTacGia==$scope.ten)
						{
								t= false;
						}
					}
					if(t== true)
					{
								if($scope.nammat==null)
								{
									$scope.nammat="."
								}

								let a= [{
								"stt":id[0].idTacGia+1,
								"namSinh": $scope.namsinh,
								"namMat": $scope.nammat,
								"tenTacGia":$scope.ten,
								"quocGia":$scope.quocgia,
								"tieuSu":$scope.tieusu
							}]

							ref.child("TacGia").child(id[0].idTacGia+1).set(a[0]);
								ref.child('id').child('id').child('idTacGia').set(id[0].idTacGia+1);

							$scope.mess=null;
							$scope.namsinh=null;
							$scope.nammat=null;
							$scope.ten=null;
							$scope.quocgia=null;
							$scope.tieusu=null;
							$scope.mess="Thêm thành công";
					
					}
					else
					{
						$scope.mess="Tác giả đã được thêm trước!";
					}
			}

		}
	})







