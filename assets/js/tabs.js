// Portfolio and Experience tab switching logic using event listeners

document.addEventListener('DOMContentLoaded', () => {
  // 1. Portfolio Tabs Showcase Switching
  const portfolioTabButtons = document.querySelectorAll('.portfolio__tab-btn');
  const portfolioTabContents = document.querySelectorAll('.portfolio__tab-content');

  if (portfolioTabButtons.length > 0) {
    portfolioTabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Extract target content ID (e.g., btn-projects -> projects)
        const targetTabId = button.id.replace('btn-', '');

        // Remove active class from all buttons and add default styling
        portfolioTabButtons.forEach(btn => {
          btn.classList.remove('portfolio__tab-btn--active');
        });

        // Add active style to clicked button
        button.classList.add('portfolio__tab-btn--active');

        // Hide all tab contents
        portfolioTabContents.forEach(content => {
          content.classList.remove('portfolio__tab-content--active');
        });

        // Show target tab content
        const targetContent = document.getElementById(targetTabId);
        if (targetContent) {
          targetContent.classList.add('portfolio__tab-content--active');
        }
      });
    });
  }

  // 2. Experience Timeline Switching
  const experienceTabButtons = document.querySelectorAll('.experience__tab-btn');
  const experienceTabContents = document.querySelectorAll('.experience__content');

  if (experienceTabButtons.length > 0) {
    experienceTabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Extract target timeline ID (e.g., exp-btn-work -> work-timeline, exp-btn-education -> edu-timeline)
        const isWork = button.id.includes('work');
        const targetTimelineId = isWork ? 'work-timeline' : 'edu-timeline';

        // Update button states
        experienceTabButtons.forEach(btn => {
          btn.classList.remove('experience__tab-btn--active');
        });
        button.classList.add('experience__tab-btn--active');

        // Hide all content areas
        experienceTabContents.forEach(content => {
          content.classList.remove('experience__content--active');
        });

        // Show the active timeline content
        const targetTimeline = document.getElementById(targetTimelineId);
        if (targetTimeline) {
          targetTimeline.classList.add('experience__content--active');
        }
      });
    });
  }
});
