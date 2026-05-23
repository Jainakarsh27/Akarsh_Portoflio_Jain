process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
const repos = [
  'Jainakarsh27/AlterSelf-AI',
  'Jainakarsh27/Websitr_Clara_AI_project',
  'Jainakarsh27/She-Care-Women-s-day-project-',
  'Jainakarsh27/Plant-Disease-Detection',
  'Jainakarsh27/MEDIBOT-AI-Enabled-Teleconsultation-Health-Assistant',
  'Jainakarsh27/Project-Synapse-AI-Powered-Last-Mile-Delivery-Platform',
  'Jainakarsh27/Akarsh-Aura-Flow---Visual-Decision-Flow-Builder',
  'Jainakarsh27/Sahayak-AI-AI-Powered-Government-Scheme-Discovery-Platform-Frontend-'
];
async function run() {
  const result = [];
  for (let repo of repos) {
    try {
      const res = await fetch('https://github.com/' + repo);
      const text = await res.text();
      
      const descMatch = text.match(/<meta name="description" content="([^"]+)"/);
      // fallback in case meta description is default "Contribute to..."
      let desc = descMatch ? descMatch[1] : '';
      if (desc.startsWith("Contribute to")) {
          // It's the default description, we can just use the name for now, or find the <p class="f4 ...">
          const pMatch = text.match(/<p class="f4[^>]*>([^<]+)<\/p>/);
          if (pMatch) desc = pMatch[1].trim();
          else desc = desc.split(" development by creating an account on GitHub.")[0].replace("Contribute to ", "");
      }
      
      // Look for `<a ... class="topic-tag topic-tag-link" ...>`
      const topicMatches = [...text.matchAll(/class="[^"]*topic-tag[^"]*"[^>]*>\s*([^<\n]+)\s*<\/a>/g)];
      let topics = topicMatches.map(m => m[1].trim());
      // De-duplicate topics
      topics = [...new Set(topics)];

      // Look for website
      const urlMatch = text.match(/<a href="(https?:\/\/[^"]+)" rel="nofollow" class="text-bold">/);
      let url = urlMatch ? urlMatch[1] : '';
      if (!url) {
        // sometimes it has a different class or it's inside `<span class="flex-1 min-w-0">`
        const spanMatch = text.match(/<span class="flex-1 min-w-0[^"]*"[^>]*>\s*<a href="(https?:\/\/[^"]+)"/);
        if (spanMatch) url = spanMatch[1];
      }

      result.push({ repo, desc, topics, url });
    } catch (e) {
      result.push({ repo, error: e.message });
    }
  }
  console.log(JSON.stringify(result, null, 2));
}
run();
