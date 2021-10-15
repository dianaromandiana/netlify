//export class AvatareditPage {
            let save = () => {
            }
            let cancel = () => {
             window.location.href =  window.location.origin +'/profile';
            }

            $("#avatar").click(function(e) {
                $("#avatarUpload").click();
            });

            let fasterPreview = ( uploader ) => {
                if ( uploader.files && uploader.files[0] ){
                      $('#avatar').attr('src',
                         window.URL.createObjectURL(uploader.files[0]) );
                }
            }

            $("#avatarUpload").change(function(){
                fasterPreview( this );
            });
//}