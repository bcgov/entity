# RFC: Entities Frontend Modernization (Nuxt 3 + Connect Layer)

**Author:** Cameron Bowler  
**Status:** DRAFT  
**Created:** October 1, 2025  
**Last Updated:** October 3, 2025  
**Reviewers:** Shahriar Khan, Severin Beauvais, Mikaela Bertucci, Melissa Stanton, Sal Hamood, Thor Wolpert, Dietrich Worlpert  

---

## 1. Purpose

Our Entity UIs currently run on an aging **Vue 2** stack with legacy dependencies (including SBC Common Components). Modernizing to **Nuxt 3** with the **Connect Layer** will reduce technical debt, standardize patterns, and unlock faster change velocity while maintaining feature parity. 

---

## 2. Background

- Several Entity projects are built with **Vue 2 / Vuetify 2**, and rely on SBC Common Components for authentication and other shared UI (e.g., footer, Pay). 
- A PoC by the **Assets** team successfully upgraded to **Vue 3 / Nuxt** with a Connect extension (still on Vuetify), demonstrating feasibility. 
- A **direct Nuxt migration** avoids a two-step rewrite (Vue 2 → Vue 3 → Nuxt). 

---

## 3. Proposal

### 3.1 What we’re doing
- **Pilot on Filings UI** to validate integration patterns and de-risk the broader migration. 
- Start with a **single-developer foundation for the first 10–15 pts** (framework/bootstrap + core shared upgrades) to avoid conflicts and set consistent patterns; then scale to a small team working in parallel. 
- Adopt **Nuxt 3 + Connect Layer** as the core, with component strategy (Vuetify 3 -> NuxtUI/Tailwind) aiming for long-term simplification. 

### 3.2 Value
- Lower maintenance cost, unified authentication via Connect, improved DX, and reuse of shared components—accelerating Create/Edit migrations after the pilot. 

### 3.3 Scope (UIs & filings)
**Filings UI**: AGM Extension; AGM Location Change; Amalgamation Out; Annual Report; Consent Amalgamation Out; Consent Continuation Out; Continuation Out; Court Order; Notice Of Withdrawal; Director Change Filing (COD); Office Address Change Filing (COA); Non‑filing: Amalgamation Selection; Non‑filing: Digital Business Card pages. 

**Create UI**: Amalgamation; Continuation In; Voluntary Dissolution; Voluntary Dissolution – Firms; Incorporation Application; Registration; Restoration. 

**Edit UI**: Coop Correction; Corp Correction; Firm Correction; Alteration (Company Information); Change of Registration; Firm Conversion; Limited Restoration Extension; Limited Restoration Conversion to Full; Special Resolution. 

---

## 4. Technical Details

### 4.1 Migration Targets
- Vue 2 → **Vue 3**; Vuetify 2 → **Vuetify 3** *or* **NuxtUI/Tailwind**; **Nuxt 3+** as the application framework. 

### 4.2 Integration Considerations
- Integrate **Connect Layer** and decouple from SBC Common Components; assess compatibility and regression risks up front. 

### 4.3 Repository Strategy (under evaluation)
- **Option A:** retain 3 repos (Filings, Create, Edit)
- **Option B:** merge to a monorepo (e.g., Business‑UI)
- **Option C:** repo per filing type  
  Initial recommendation: refactor in current UI repos now to reduce risk and migration overhead; relocation can be revisited later. 

---

## 5. Implementation Plan

### 5.1 Phases & Milestones
1. **Vue 3 + Nuxt + Connect**: integrate the modern stack into the lowest‑risk repo (Filings). 
2. **Shared Functionality Rewrites**: convert mixins and other shared logic to composables. 
3. **Component Rewrites**: move to Vuetify 3 or NuxtUI + Tailwind with parity to current behavior. 
4. **Unit Testing Suite Upgrade**: align tests with the new stack. 
5. **Repeat for Create/Edit**: apply the same process. 

### 5.2 Sizing & Timeframe (Filings UI pilot)
- **Estimates (Filings only)**:
    - Base setup & integration — **5 pts** (packages, Nuxt 3 scaffolding, Connect integration) 
    - Shared components upgrade — **15 pts** (minimum required set) 
    - Refactoring views — **15 pts** (listed filings) 
    - Internal components/flows — **20 pts** (plus common dialogs) 
    - Mixins → composables — **3 pts** (allowable actions, breadcrumb, common, date, director, filing, name‑request, resource‑lookup) 
    - **Unit tests** — **20–40 pts** in parallel with QA; not blocking build readiness. 
    - **Subtotal:** ~**60** build pts + **30+** test pts (parallel to QA). 
- **Timeframe**: **6–8 weeks** for Filings pilot; **4–6 weeks** each for Create/Edit due to reuse and fewer unknowns. 

### 5.3 Execution Model
- **Manpower sequencing**: first **10–15 pts** by a **single developer**; then the potential to parallelize across the team, if time is critical. 
- **Environments**: run a **parallel dev environment or deployed feature branch to DEV for comparisons with TEST**; gate releases with feature flags where feasible. 

---




<h2>6. Options & Trade‑offs</h2>

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Pros</th>
      <th>Cons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>No upgrade</td>
      <td>—</td>
      <td>Compounding technical debt; poor DX; support risk and ongoing cost</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Vue 3 + Vuetify 3</td>
      <td>Familiar stack; lowest LOE</td>
      <td>Still tied to Vuetify; partial rewrites still required</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Vue 3 + Vuetify 3 + Nuxt + Connect</td>
      <td>First step to modern; Connect access</td>
      <td>Dual libraries; higher effort/time</td>
    </tr>
    <tr>
      <td>4</td>
      <td><strong>Nuxt 3 + Connect + NuxtUI/Tailwind</strong></td>
      <td>Modern, scalable; aligns with contemporary stack; Most long term value</td>
      <td>Component rewrites; learning curve; highest initial effort</td>
    </tr>
  </tbody>
</table>


---


## 7. Risks & Mitigations

- **Code syncing** with active development → dedicated branch strategy and weekly sync; feature flags. 
- **Resourcing & skills mix** → named core team; pair programming; targeted spikes. 
- **Shared components drift** → parity tests; coordinated PR reviews across Entity and shared‑components maintainers. 
- **Estimate stability** (variables, churn) → working agreement and change‑control guardrails. 
- **Auth/Connect integration** unknowns → early spike, checklist for session lifecycle and edge cases. 

---

## 8. Open Questions

- Should the Entities modernization live inside **Business‑UI** or another mono-repo, or remain a separate repo with shared packages? 
- What level of design fidelity is expected for parity vs. modernization during component rewrites?  

---

## 9. References

- Working Document: [1](https://bcgov-my.sharepoint.com/:w:/r/personal/cameron_bowler_gov_bc_ca/Documents/Entities_Frontend_Modernization.docx?d=w36c99495b63745b8bd3137d2e29fba68&csf=1&web=1&e=WN2Iw2)
