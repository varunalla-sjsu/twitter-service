function onDeletePost(id, name)
{
    console.log(name,id);
    if (name === that.userData.name)
    {
        this.id = id;
        var modal = document.getElementById("myModal");
        modal.style.display = "block";


    }
    else
    {
        alert("You are not authorized to delete a post...")
    }
}
function pressOk()
{
    modal.style.display = "none";

    $.ajax('/tweet/' + this.id, {
        // data: JSON.stringify(request),
        contentType: 'application/json',
        method: 'DELETE'
    }).done(function (data) {
       
        alert("Post Deleted Successfully..");
        window.location.reload();
        // myResolve(); // when successful
    });


}
function pressCancel()
{
    modal.style.display = "none";
}