/*
 * LaraClassified - Geo Classified Ads CMS
 * Copyright (c) BedigitCom. All Rights Reserved
 *
 * Website: http://www.bedigit.com
 *
 * LICENSE
 * -------
 * This software is furnished under a license and may be used and copied
 * only in accordance with the terms of such license and with the inclusion
 * of the above copyright notice. If you Purchased from Codecanyon,
 * Please read the full License from here - http://codecanyon.net/licenses/standard
 */

$(document).ready(function()
{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('input#locSearch').autocomplete({
        serviceUrl: siteUrl + '/ajax/countries/' + countryCode + '/cities/autocomplete',
        type: 'post',
        data: {
            'city': $(this).val(),
            '_token': $('input[name=_token]').val()
        },
        minChars: 1,
        onSelect: function(suggestion) {
            $('#lSearch').val(suggestion.data);
        }
    });
});