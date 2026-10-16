## What I Built

### 1. Inspector: Reliable Offline Field Work

The inspector experience begins before the walkthrough. The user downloads a field package containing the frozen inspection template, the site's locations, and the roster data required by the assignment.

- Stored answers, finding details, and photo bytes incrementally in IndexedDB
- Evaluated conditional questions locally with a shared forms engine
- Required a description, location, and photo when a negative answer creates a finding
- Preserved unfinished work across refreshes, application restarts, and connectivity changes
- Added a review screen that identifies incomplete work before signing
- Treated signing as the point of no return

![Capturing a finding without connectivity](/images/projects/offlineInspectionSystem/offline-finding-capture.png)

After signing, the submission enters a durable browser outbox. Delivery resumes when the application starts or connectivity returns. Persisted retries and a multi-tab lock prevent temporary failures from losing work or sending duplicates.

Each draft receives a stable `client_submission_id`. The server uses that identifier to distinguish a retry from a second submission. In one transaction, it validates the assignment and frozen template, checks uploaded photo keys, validates the answers, stores the immutable inspection, derives findings, and records audit events. A rejected submission leaves no partial data behind.

![Signed inspection waiting in the device outbox](/images/projects/offlineInspectionSystem/device-outbox.png)

### 2. Coordinator: Planning and Corrective Action

The coordinator turns recurring safety obligations into assigned work. The annual schedule shows every required period across a site, including open, completed, missed, and cancelled inspections.

- Defined requirements by site, template, cadence, and calendar anchor
- Opened each period against a specific published template version
- Kept opening, assignment, and visibility as separate administrative decisions
- Highlighted unassigned periods before they became coverage gaps
- Preserved cancellation reasons and scheduling history

Freezing the template version protects historical accuracy. An inspector always answers the version that was assigned, even if the organization publishes a revision before the walkthrough is completed.

![Annual inspection schedule across sites](/images/projects/offlineInspectionSystem/annual-schedule.png)

A negative inspection response becomes a finding with its original question, observation, location, and evidence. From the same screen, an authorized user assigns corrective work to a named person with an explicit deadline.

```text
Open → In progress → Awaiting verification → Closed
                         └───────────────→ In progress
                              Sent back
```

The person who declares work complete normally cannot verify it. A coordinator or management user can verify and close the action or send it back with a reason. Overdue work escalates after three days to the coordinator and after seven days to management.

![Finding evidence and corrective action lifecycle](/images/projects/offlineInspectionSystem/finding-lifecycle.png)

### 3. Management: Access and Oversight

The data model separates a person in the workforce from a user who can sign in. More than 200 workers can appear as an incident subject, witness, or corrective-action owner, while only a small subset needs credentials.

Coordinators can maintain the roster, import updates, invite inspectors, and revoke access. Management shares the operational administration workflow but is the only role allowed to promote an inspector to coordinator or demote a coordinator to inspector. Management also receives the final escalation for overdue corrective work.

Roles and site memberships are loaded from PostgreSQL on every authenticated request. A permission change therefore applies to the next request instead of waiting for an access token to expire.

![Management promoting an inspector to coordinator](/images/projects/offlineInspectionSystem/management-role-change.png)

### 4. Incident Reporting and Investigation

A coordinator or management user can report an incident about a roster person without exposing a worker profile or granting that person an account.

- Used guided fields for the task, equipment, event, witnesses, treatment, and immediate action
- Excluded diagnoses, medical reports, and functional restrictions by design
- Calculated applicable MLITSD and WSIB deadlines from immutable incident facts
- Supported Five Whys and cause-tree investigations
- Required a root cause and closed corrective work before an investigated incident can close
- Provided read-only WSIB Form 7 field mapping with copy controls

The system supports regulatory preparation but does not file automatically with MLITSD or WSIB. Its deadline rules remain subject to legal confirmation before production use.

![Incident details and regulatory deadlines](/images/projects/offlineInspectionSystem/regulatory-clocks.png)

---

## Architecture and Key Decisions

The React PWA stores frozen field packages, drafts, and photos locally. The NestJS API validates shared Zod contracts and runs the same deterministic forms engine used by the browser. PostgreSQL provides the final integrity boundary.

```text
React PWA and IndexedDB
          ↓
NestJS API and shared validation
          ↓
PostgreSQL, RLS, events, and audit chain
```

The main engineering decisions were:

- **Offline capture, not generic synchronization:** one inspection has one owner, one device, and one signer, so there is no legitimate concurrent-editing conflict to merge.
- **Database-enforced site isolation:** row-level security protects records even if an endpoint omits a filter.
- **Engine-enforced immutability:** restricted privileges and triggers prevent accepted records from being rewritten or deleted.
- **Shared client/server semantics:** the browser and API validate the same frozen document with the same pure forms package.
- **Event-derived state:** findings, actions, and incidents advance through append-only events instead of mutable status columns.

The test strategy targets those architectural claims. Unit and component tests cover form behavior and role workflows, while Testcontainers runs the real PostgreSQL roles and migrations to test concurrent submissions, rollback, cross-site isolation, state transitions, and forbidden mutations.

---

## Outcomes

The project includes a reproducible demonstration environment with five months of inspection history, findings created through the real submission path, corrective actions in every lifecycle stage, overdue escalation, and incidents in reported, investigation, and closed states.

Demonstrable outcomes include:

- Offline inspections and photos survive application closure and reconnection
- Retrying the same submission does not create duplicate inspections
- Invalid submissions leave no partial inspection, finding, or audit records
- Historical reports retain the exact template version used in the field
- PostgreSQL enforces site isolation and prevents mutation of immutable records
- Corrective work remains open until it passes the required verification rules

The product requirements define additional first-year production targets, including zero inspections lost to connectivity, zero cross-site access violations, and complete roster updates in 15 minutes or less. These remain targets rather than claimed production results.

---

## What I Learned

Offline-first design starts with ownership and failure boundaries, not with a synchronization library. Defining one owner, one device, one signer, and one irreversible submission made the field workflow resilient without creating a distributed editing problem.

The project also reinforced that constraints can improve product design. Database privileges shaped the lifecycle model, site isolation shaped every request, and separating people from users simplified both privacy and access. By removing unsupported complexity, I could focus the system on what matters most: preserving field work and turning safety findings into verified action.
