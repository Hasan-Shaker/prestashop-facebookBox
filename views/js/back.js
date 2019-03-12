/**
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *  @author    Michał Wilczyński <mwilczynski0@gmail.com>
 *  @copyright 2019 Michał Wilczyński
 *  @license   MIT, see above
 */

// Wait for the DOM to be ready
$(document).ready(function(){
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#module_form").validate({
        // Specify validation rules
        rules: {
            FACEBOOKBOX_PAGE_URL: {
                required: true,
                url: true
            }
        },

        messages: {
            FACEBOOKBOX_PAGE_URL: {
                required: "Facebook Page URL can not be empty",
                url: "Facebook Page URL is invalid"
            }
        },

        submitHandler: function(form) {
            form.submit();
        }
     });
    });
});

