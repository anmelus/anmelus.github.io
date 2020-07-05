$(document).ready( function () {
    const options = {
        ajax: {
            url: './backlog.json',
            dataSrc: 'backlog'
        },
        columns: [
            { data: 'Name' },
            { data: 'Platform' },
            { data: 'Runnable' },
            { data: 'Progress' },
            { data: 'Streamable' },
        ],
        columnDefs: [
            {
                targets: [2, 4],
                render: function (data) {

                    const styleMap = {
                        'N/A': {
                            labelType: 'default',
                            style: 'color: #9b9b9b;'
                        },
                        'Maybe': {
                            labelType: 'default',
                            style: 'color: #EE7E2A;'
                        },
                        'Yes': {
                            labelType: 'default',
                            style: 'color: #50992a;'
                        },
                        'No': {
                            labelType: 'default',
                            style: 'color: #a05262;'
                        },
                    };

                    const styles = styleMap[data];

                    if (styles){
                        const labelType = styles.labelType || 'default';
                        const style = styles.style || '';
                        return `<span class="label label-${labelType}" style="background-color: rgba(26, 26, 26, 1); ${style}"> ${data} </span>`; 
                    }

                    return data;
                }
            }
        ],
        paging: false,
        responsive: true,
        fixedHeader: true,
        order: [[ 0, "asc" ]]
    };
    const table = $('#table').DataTable(options);
} );