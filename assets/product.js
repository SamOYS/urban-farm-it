document.addEventListener('DOMContentLoaded', function() {
    const breadcrumbStart = document.querySelector('.breadcrumb a[data-collection-title]');
    const defaultBreadcrumbInnerHTML = breadcrumbStart.innerHTML;
  
    if (breadcrumbStart) {
        breadcrumbStart.addEventListener('mouseover', function() {
            const fullTitle = breadcrumbStart.getAttribute('data-collection-title');
            breadcrumbStart.textContent = fullTitle;
        });

        breadcrumbStart.addEventListener('mouseout', function() {
            breadcrumbStart.innerHTML = defaultBreadcrumbInnerHTML;
        });
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//   // Create a new observer instance
//   const observer = new MutationObserver(function (mutations) {
//     // For each mutation record
//     mutations.forEach(function (mutation) {
//       // If the addedNodes property has one or more nodes
//       if (mutation.addedNodes.length) {
//         const reviewElement = document.querySelector('.jdgm-rev-widg');
//         if (reviewElement) {
//           const attributeValue = reviewElement.getAttribute('data-number-of-reviews');
//           const avgReviewScore = reviewElement.getAttribute('data-average-rating');
//           const reviews = document.querySelectorAll('.jdgm-rev-widg__reviews .jdgm-rev');
          
//           // Array of negative words
//           const negativeWords = ['disappoint', 'disappointed', 'disappointing', 'poor', 'bad', 'terrible', 'awful', 'horrible', 'dreadful', 'abysmal', 'lousy', 'lame', 'sucks', 'worthless', 'useless', 'pathetic'];

//           for (var i = 0; i < reviews.length; i++) {
//             let review = reviews[i];
//             const reviewRating = review
//               .querySelector('.jdgm-rev__rating')
//               .getAttribute('data-score');
//             const reviewBody = review.querySelector('.jdgm-rev__body').textContent;
//             const reviewAuthor = review.querySelector('.jdgm-rev__author').textContent;

//             // Check if the review contains any negative words
//             let containsNegativeWords = negativeWords.some(word => reviewBody.toLowerCase().includes(word));
//             if (reviewRating == 5 && reviewBody.length <= 120 && !containsNegativeWords) {
//               const featuredReviewElem = document.querySelector('#featured-review');
//               featuredReviewElem.textContent = `"${reviewBody}" - ${reviewAuthor}`;
//               break;
//             }
//           }
//           // Disconnect observer after finding the element
//           observer.disconnect();
//         }
//       }
//     });
//   });

//   // Configuration of the observer
//   const config = { attributes: true, childList: true, subtree: true };

//   // Select the node that will be observed for mutations (document.body in this case)
//   observer.observe(document.body, config);
// });

// (function() {
//   const elements = document.querySelectorAll('.grid-product__content');
//   const currentTime = new Date().getTime() / 1000;

//   elements.forEach((element) => {
//     const publishedAt = parseInt(element.getAttribute('data-published-at'), 10);
//     const oneMonthInSeconds = 30 * 24 * 60 * 60; // 30 days * 24 hours * 60 minutes * 60 seconds

//     if (currentTime - publishedAt <= oneMonthInSeconds) {
//       const ribbonHTML = `
//         <div class="grid-product__ribbon" style="
//           position: absolute;
//           z-index: 1;
//           background: red;
//           color: white;
//           text-align: center;
//           transform: translate(-29.29%, 100%) rotate(-45deg);
//           left: 0;
//           top: 0;
//           width: 155px;
//         ">New!</div>
//       `;

//       element.insertAdjacentHTML('afterbegin', ribbonHTML);
//     }
//   });
// })();
