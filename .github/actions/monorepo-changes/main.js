const core = require("@actions/core")
const github = require("@actions/github")


async function run() {
	const token = core.getInput("repo-token");

	const octokit = github.getOctokit(token);

	const { eventName, payload } = github.context;
	const { owner, repo } = github.context.repo;
	console.log(process.cwd())
	console.log(JSON.stringify(github.context, null, 2));

	// switch (eventName) {
	// 	case "issues":
	// 		const issue_number = (payload as Payload.WebhookPayloadIssues).issue
	// 			.number;
	// 		if (payload.action === "opened") {
	// 			try {
	// 				octokit.issues.addLabels({
	// 					owner,
	// 					repo,
	// 					issue_number,
	// 					labels: ["to-refine"],
	// 				});
	// 			} catch (error) {
	// 				core.setFailed(
	// 					"Error adding Label: " + error.message + "\n" + error.stack
	// 				);
	// 			}
	// 		} else if (
	// 			payload.action === "labeled" &&
	// 			payload.label.name === "to-refine"
	// 		) {
	// 			const issue_id = (payload as Payload.WebhookPayloadIssues).issue.id;

	// 			const columns = await get_columns(octokit, {
	// 				owner,
	// 				repo,
	// 				project_name,
	// 			});

	// 			// should only fail if the issue is already on the board
	// 			// this is fine it wont cause CI to fail

	// 			await octokit.projects.createCard({
	// 				column_id: columns["to refine"],
	// 				content_id: issue_id,
	// 				content_type: "Issue",
	// 			});
	// 		} else if (
	// 			payload.action === "unlabeled" &&
	// 			payload.label.name === "to-refine"
	// 		) {
	// 			const columns = await get_columns(octokit, {
	// 				owner,
	// 				repo,
	// 				project_name,
	// 			});

	// 			const issue_card = (
	// 				await octokit.projects.listCards({
	// 					column_id: columns["to refine"],
	// 				})
	// 			).data.find(
	// 				({ content_url }) =>
	// 					content_url &&
	// 					content_url.split("/").pop()?.trim() === `${issue_number}`
	// 			);

	// 			issue_card &&
	// 				(await octokit.projects.moveCard({
	// 					card_id: issue_card.id,
	// 					position: "top",
	// 					column_id: columns["to do"],
	// 				}));

	// 			console.log(JSON.stringify(issue_card, null, 2));
	// 		}
	// 		break;
	// 	case "pull_request":
	// 		if (payload.action === "created" || payload.action === "edited") {
	// 			const get_issue_cards = get_matching_issue_cards(octokit, {
	// 				owner,
	// 				repo,
	// 				project_name,
	// 			});

	// 			let columns: column_ids | Promise<column_ids> = get_columns(octokit, {
	// 				owner,
	// 				repo,
	// 				project_name,
	// 			});

	// 			// parse PR body + commit messages for closes/fixes syntax.
	// 			const commit_messages = (
	// 				await octokit.pulls.listCommits({
	// 					owner,
	// 					repo,
	// 					pull_number: (payload as Payload.WebhookPayloadPullRequest)
	// 						.pull_request.number,
	// 				})
	// 			).data.reduce(
	// 				(acc, { commit: { message } }) => `${acc}${message}\n`,
	// 				""
	// 			);

	// 			const linked_prs = match_close_words(
	// 				commit_messages +
	// 					(payload as Payload.WebhookPayloadPullRequest).pull_request.body
	// 			);

	// 			console.log(linked_prs);

	// 			const issue_cards = (await get_issue_cards)(linked_prs);

	// 			console.log(issue_cards);

	// 			const close_cards = Promise.all(
	// 				issue_cards.map(({ id: card_id }) =>
	// 					octokit.projects.deleteCard({
	// 						card_id,
	// 					})
	// 				)
	// 			).catch((e) => {
	// 				throw new Error(e);
	// 			});

	// 			columns = await columns;

	// 			const new_card = octokit.projects.createCard({
	// 				column_id: columns["in progress"],
	// 				note:
	// 					"**" +
	// 					(payload as Payload.WebhookPayloadPullRequest).pull_request.title +
	// 					"**" +
	// 					" (#" +
	// 					(payload as Payload.WebhookPayloadPullRequest).pull_request.number +
	// 					")\n\n" +
	// 					linked_prs.reduce(
	// 						(acc, [pr, word]) => `${acc}${word} #${pr}. `,
	// 						""
	// 					),
	// 			});

	// 			// check if card exists
	// 			// --> if it does update
	// 			// --> if not create

	// 			// get columns match prs

	// 			// Title -> payload.pull_request.title
	// 			// Body -> payload.pull_request.title
	// 		}
	// 		break;
	// 	default:
	// 		break;
	// }
}

run();
