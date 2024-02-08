

$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        content: '<div class="media"><img src="Logo.png" width = 50px height = 50px class="mr-3" alt="Logo"><div class="media-body"><p>OFFICIAL MEMBER</p></div></div>'
    });


    $(document).on('click', '.fa-trash', function() {
        var teamName = $(this).closest('tr').find('td:first').text();
        $('#deleteModal').data('teamName', teamName);
        $('#deleteModal').modal('show');
    });
});

function confirmDelete() {
    var teamName = $('#deleteModal').data('teamName');
    $('#deleteModal').modal('hide');

    var alertHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                    'Team ' + teamName + ' deleted!' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    $('#myTabContent').prepend(alertHtml);
}

